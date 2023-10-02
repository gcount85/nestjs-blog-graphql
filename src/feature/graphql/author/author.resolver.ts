import { Inject } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { FindAuthorUseCase } from './usecase/find-author.usecase';
import { AuthorEntity } from './domain/model/author.entity';

@Resolver('Author') // resolveField의 parent를 가리킬 때 참조된다.
export class AuthorResolver {
  constructor(
    @Inject(FindAuthorUseCase)
    private readonly findAuthorUseCase: FindAuthorUseCase,
  ) {}

  @Query('author')
  async getAuthor(@Args('id') id: number): Promise<AuthorEntity> {
    return await this.findAuthorUseCase.findOne(id);
  }

  // 메소드 네임은 graphQL 스키마의 query 타입에 정의한 이름과 동일해야 한다.
  // 혹은 resolveField의 인수로 그 이름을 넘겨준다.
  @ResolveField('posts')
  async getPosts(@Parent() author: AuthorEntity) {
    // return await this.findPostUseCase.findOne(author.id);
    return null;
  }
}
