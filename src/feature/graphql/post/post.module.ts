import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { FindPostUseCase } from '../usecase/find-post.usecase';
import { FindPostInteractor } from '../usecase/find-post.interactor';
import { PostGateway } from '../domain/gateway/post.gateway';
import { PostDsMapper } from '../database/post.ds.mapper';

@Module({
  providers: [
    PostResolver,
    {
      provide: FindPostUseCase, // usecase를 다른 모듈에서 사용하면 interactor 인스턴스를 생성하도록 한다.
      useClass: FindPostInteractor,
    },
    {
      provide: PostGateway,
      useClass: PostDsMapper,
    },
  ],
  exports: [FindPostUseCase], // 리졸버 익스포트 맞나??? 모듈 익스포트 아니고??? -> 모듈은 익스포트 안함. 이거 맞음.
})
export class PostModule {}
