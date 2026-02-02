<<<<<<< HEAD
# todos
A nestjs baased backend application
=======
<!-- <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE). -->


what nestjs have included 

Modules -
Providers/services
Controllers
DI


Request/Response Handling
Decorators -
DTOs (Data Transfer Objects) 
Pipes 
Guards - 
Interceptors -

Data & Persistence
TypeORM or Prisma integration 
Database concepts -
Repository pattern -


Advanced Patterns
Middleware -
Exception Filters -
Custom Decorators -
Configuration Management

Additional Backend Concepts
Authentication & Authorization
API Design 
Security 
Async Operations

## Run MySQL in Docker (recommended)

### 1) Create your local `.env`

```bash
cp .env.example .env
```

Open `.env` and set these values:

- `DB_PASS` (password for `todo_user`)
- `MYSQL_ROOT_PASSWORD` (password for MySQL `root`)

### 2) Start the database

```bash
docker compose up -d
```

### 3) Connect using MySQL Workbench

Create a new connection in Workbench:

- **Hostname**: `127.0.0.1`
- **Port**: `3306`
- **Username**: `todo_user`
- **Password**: value of `DB_PASS`
- **Default schema**: `todo_db`

### 4) Run the NestJS API (locally)

```bash
npm install
npm run start:dev
```

## TypeORM migrations (migrations-only schema)

This project is configured to **never** use `synchronize` (it is forced to `false` in code). All schema changes should happen via **migrations**.

### Create / generate migrations

- Create an empty migration (manual SQL/queries):

```bash
npm run migration:create -- src/database/migrations/AddSomething
```

- Generate a migration from entity changes (diff-based):

```bash
npm run migration:generate -- src/database/migrations/UpdateSchema
```

### Apply / rollback migrations

- Apply pending migrations:

```bash
npm run migration:run
```

- See migration status:

```bash
npm run migration:show
```

- Roll back the last migration:

```bash
npm run migration:revert
```

### Production

Recommended approach is to run migrations during deploy (before starting the app):

```bash
npm run build
npm run migration:run:prod
npm run start:prod
```

### Optional: start Redis later (when you need it)

Redis is already in `docker-compose.yml` but disabled by default.

```bash
docker compose --profile extras up -d
```

### Stop / reset the database

```bash
docker compose down
```

To delete the database data completely (dangerous):

```bash
docker compose down -v
```
>>>>>>> f0bcb7b (basic-layout - implemented basic application structue)
