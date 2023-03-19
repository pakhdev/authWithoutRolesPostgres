import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({

    NODE_ENV: Joi.string().default('dev'),
    API_PORT: Joi.number().default(3000),
    JWT_SECRET: Joi.string().required(),

    POSTGRES_DB_NAME: Joi.string().default('aihance'),
    POSTGRES_DB_HOST: Joi.string().default('localhost'),
    POSTGRES_DB_PORT: Joi.number().required(),
    POSTGRES_DB_USER: Joi.string().required(),
    POSTGRES_DB_PASSWORD: Joi.string().required(),
    POSTGRES_TIMEZONE: Joi.string().default('Europe/Madrid'),
});
