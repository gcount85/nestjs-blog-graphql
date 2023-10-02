import { Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PostEntity } from './domain/model/post.entity';
import { FindPostUseCase } from './usecase/find-post.usecase';

@Resolver('author')
export class PostResolver {
  constructor(
    // FindPostUseCase 토큰을 inject의 인자로 넘겨 findPostUseCase라는 멤버 변수로 생성한다.
    // WARNING: inject의 인수로 넘기는 거 까먹지 않기
    @Inject(FindPostUseCase) private readonly findPostUseCase: FindPostUseCase,
  ) {}

  @Query('post') // 이거 post 안 쓰면 어케 되나?
  async getPost(id: number): Promise<PostEntity | null> {
    return await this.findPostUseCase.findOneById(id);
  }

  @Query()
  async getPosts(authorId: number): Promise<PostEntity | null> {
    return null;
    //@ts-ignore
    return await this.findPostUseCase.findManyByAuthorId(authorId);
  }
}
