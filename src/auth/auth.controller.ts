import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Signup = create user + return JWT
  @Post('signup')
  async signup(@Body() dto: SignupDto) {
    return await this.authService.signup(dto);
  }

  // Login uses passport-local (email + password)
  // DTO still validated by ValidationPipe before guard runs? (Guard runs first),
  // so we accept it for docs/shape only; the guard reads req.body.
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() _dto: LoginDto, @Request() req: any) {
    console.log('when me called', req.user);
    return await this.authService.login(req.user);
  }
}

