import { BadRequestException, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { PostgresError } from '../interfaces/postgres-error.interface';

export const handleDBErrors = (error: PostgresError, from: string): never => {
    const logger = new Logger(from);

    if (error instanceof NotFoundException)
        throw new NotFoundException(error.message);

    switch (error.code) {
        case '23503':
            throw new BadRequestException('Cannot delete or update a parent row');
        case '23505':
            throw new BadRequestException(error.detail);
        case '22P02':
            throw new BadRequestException('Invalid input syntax for data type');
        case '23502':
            throw new BadRequestException('Missing required fields');
        case '22001':
            throw new BadRequestException('Data is too long');
        case '42703':
            throw new BadRequestException('Invalid column');
        case '42P01':
            throw new NotFoundException(error.message);
        case '40P01':
            throw new InternalServerErrorException('Deadlock detected');
        default:
            logger.error(error);
            logger.error(error.message);
            throw new InternalServerErrorException('Error, check logs');
    }
};
