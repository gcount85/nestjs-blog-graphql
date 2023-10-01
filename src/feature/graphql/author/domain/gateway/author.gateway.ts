// 데이터베이스 mapper의 인터페이스 정의

import { AuthorEntity } from './model/author.entity';

export interface AuthorGateway {
  findOne(id: number): Promise<AuthorEntity | null>;
}

export const AuthorGateway = Symbol('AuthorGateway');
