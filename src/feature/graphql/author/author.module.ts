import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { PostModule } from '../post/post/post.module';

@Module({
  imports: [PostModule], // 모듈 임포트 맞나? -> 맞음
  providers: [AuthorResolver],
})
export class AuthorModule {}
