// author gateway의 구현. 데이터베이스 접근 로직을 담는다.

import { Injectable } from '@nestjs/common';
import { AuthorGateway } from '../domain/gateway/author.gateway';
import { AuthorEntity } from '../domain/model/author.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable() // 얜 왜 injectable이 붙지 -> 다른 모듈에서 써야 해서
export class AuthorDsMapper implements AuthorGateway {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number): Promise<AuthorEntity | null> {
    const author = await this.prisma.author.findUnique({ where: { id } });

    if (!author) {
      return null;
    }

    return new AuthorEntity(author);
  }
}
