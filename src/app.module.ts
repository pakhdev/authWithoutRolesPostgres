import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoiValidationSchema } from '@/config/joi.validation';
import { envConfiguration } from './config/env.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [envConfiguration],
            validationSchema: JoiValidationSchema,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_DB_HOST,
            port: +process.env.POSTGRES_DB_PORT,
            database: process.env.POSTGRES_DB_NAME,
            username: process.env.POSTGRES_DB_USER,
            password: process.env.POSTGRES_DB_PASSWORD,
            autoLoadEntities: true,
            synchronize: true,
        }),
        AuthModule,
    ],
})
export class AppModule {
}
