// usecase의 구현

import { Inject } from '@nestjs/common';
import { FindAuthorUseCase } from './find-author.usecase';
import { AuthorEntity } from '../domain/gateway/model/author.entity';
import { AuthorGateway } from '../domain/gateway/author.gateway';

export class FindAuthorInteractor implements FindAuthorUseCase {
  constructor(@Inject(AuthorGateway) private readonly gateway: AuthorGateway) {}

  async findOne(id: number): Promise<AuthorEntity | null> {
    if (!id) {
      return null;
    }

    return await this.gateway.findOne(id);
  }
}
