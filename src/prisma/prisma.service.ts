import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
constructor (private readonly logger: Logger) {

    super({log: ['query', 'info', 'warn', 'error']})
}

}
