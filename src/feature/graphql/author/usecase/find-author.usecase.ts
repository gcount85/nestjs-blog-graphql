// interactor의 인터페이스

import { AuthorEntity } from '../domain/gateway/model/author.entity';

export interface FindAuthorUseCase {
  findOne(id: number): Promise<AuthorEntity>;
}

export const FindAuthorUseCase = Symbol('FindAuthorUseCase');
