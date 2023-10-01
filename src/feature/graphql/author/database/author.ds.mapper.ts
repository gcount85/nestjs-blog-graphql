// author gateway의 구현. 데이터베이스 작업.

import { Injectable } from '@nestjs/common';
import { AuthorGateway } from '../domain/gateway/author.gateway';
import { AuthorEntity } from '../domain/gateway/model/author.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable() // 얜 왜 injectable이 붙지?
export class AuthorDsMapper implements AuthorGateway {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number): Promise<AuthorEntity | null> {
    // prisma db 쿼리 메소드
    return null;
  }
}
