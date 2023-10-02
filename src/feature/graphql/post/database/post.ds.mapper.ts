import { PrismaService } from 'src/prisma/prisma.service';
import { PostGateway } from '../domain/gateway/post.gateway';
import { PostEntity } from '../domain/model/post.entity';
import { Injectable } from '@nestjs/common';

// WARNING injectable 까먹지 않기
// inject랑 injectable은 먼 차이야
@Injectable()
export class PostDsMapper implements PostGateway {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: number): Promise<PostEntity | null> {
    const post = await this.prisma.post.findUnique({ where: { id } });

    if (!post) {
      return null;
    }

    return new PostEntity(post);
  }

  async findManyByAuthorId(authorId: number): Promise<PostEntity[] | null> {
    const posts = await this.prisma.post.findMany({ where: { authorId } });

    if (!posts) {
      return null;
    }

    return posts.map((p) => new PostEntity(p));
  }
}
