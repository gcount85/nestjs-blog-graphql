import { PostEntity } from '../model/post.entity';

export interface PostGateway {
  findOneById(id: number): Promise<PostEntity | null>;
  findManyByAuthorId(id: number): Promise<PostEntity[] | null>;
}

export const PostGateway = Symbol('PostGateway');
