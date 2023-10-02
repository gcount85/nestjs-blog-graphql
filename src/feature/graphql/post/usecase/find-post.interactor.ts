import { Inject } from '@nestjs/common';
import { FindPostUseCase } from './find-post.usecase';
import { PostGateway } from '../domain/gateway/post.gateway';
import { PostEntity } from '../domain/model/post.entity';

export class FindPostInteractor implements FindPostUseCase {
  constructor(@Inject(PostGateway) private readonly gateway: PostGateway) {}
  async findOneById(id: number): Promise<PostEntity | null> {
    if (!id) {
      return null;
    }
    return await this.gateway.findOneById(id);
  }

  async findManyByAuthorId(authorId: number): Promise<PostEntity[] | null> {
    if (!authorId) {
      return null;
    }
    return await this.gateway.findManyByAuthorId(authorId);
  }
}
