import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { SignupDto } from './dto/signup.dto';
import { AuthUser } from './types/auth-user.type';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  private toAuthUser(user: User): AuthUser {
    return { id: user.id, email: user.email, name: user.name };
  }

  async signup(dto: SignupDto): Promise<{ user: AuthUser; accessToken: string }> {
    const existing = await this.usersRepo.findOne({
      where: { email: dto.email },
      select: { id: true },
    });
    if (existing) throw new ConflictException('Email already in use');

    const saltRounds = Number(this.configService.get('BCRYPT_ROUNDS', '10'));
    const passwordHash = await bcrypt.hash(dto.password, saltRounds);

    const user = this.usersRepo.create({
      email: dto.email,
      passwordHash,
      name: dto.name ?? null,
    });
    const saved = await this.usersRepo.save(user);

    const authUser = this.toAuthUser(saved);
    const accessToken = await this.signAccessToken(authUser);
    return { user: authUser, accessToken };
  }

  // Used by LocalStrategy
  async validateUser(email: string, password: string): Promise<AuthUser> {
    const user = await this.usersRepo.findOne({
      where: { email },
      select: { id: true, email: true, passwordHash: true, name: true },
    });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) throw new UnauthorizedException('Invalid credentials');

    return this.toAuthUser(user);
  }

  async login(user: AuthUser): Promise<{ user: AuthUser; accessToken: string }> {
    const accessToken = await this.signAccessToken(user);
    return { user, accessToken };
  }

  private async signAccessToken(user: AuthUser): Promise<string> {
    // Common JWT convention: sub = subject (user id)
    return await this.jwtService.signAsync({ sub: user.id, email: user.email });
  }
}

