import { PostEntity } from '../domain/model/post.entity';

// 메소드 이름 다시 한번 보기
export interface FindPostUseCase {
  findOneById(id: number): Promise<PostEntity> | null;
  findManyByAuthorId(authorId: number): Promise<PostEntity[]> | null; // author id?
}

export const FindPostUseCase = Symbol('FindPostUseCase');
