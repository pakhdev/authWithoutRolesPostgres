<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

This is a basic authorization module for NestJS with TypeORM using PostgreSQL. The module includes:

- `@GetUser` decorator for use only in protected routes, returns all user properties
- DB errors handler
- Main authorization methods: registration, login, token-renewing
- Additional methods: user data update (only from the same user id), get user by id and get users list with pagination
- ConfigModule, docker-compose(PostgreSQL server) file and `.env.template` with very basic options, needs to be replaced

## Installation

To install this authorization module, you need to:

1. Install NestJS and configure the TypeORM module for PostgreSQL connection.
2. Copy the `src/auth` and `src/common` folders to your project.
3. Run the following commands to install dependencies:

   ```bash
   $ npm i bcrypt @nestjs/passport passport @nestjs/jwt passport-jwt
   $ npm i -D @types/bcrypt @types/passport-jwt
   ```

4. Import AuthModule to your app.module.ts and any other relevant modules.
5. Enjoy! :)

## Usage

To restrict access to a route for authorized users only, use the @UseGuards(AuthGuard()) decorator, like in this example:

```typescript
@Patch('update/:id')
@UseGuards(AuthGuard())
updateUser(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
    @Body() updateUserDto: UpdateUserDto
    ) { ... }


// This example also demonstrate the use of the `@GetUser` decorator.
```

I hope this helps! Let me know if you have any questions.
