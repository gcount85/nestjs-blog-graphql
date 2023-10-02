import { AuthorEntity } from 'src/feature/graphql/author/domain/model/author.entity';
import { DateTime } from 'src/graphql';

// dto 아니고 interface라고 이름 짓는다.
export interface PostInterface {
  id: number;
  title: string;
  votes: number;
  content: string;
  name: string;
  createdDt: DateTime; // graphQL datetime 맞아?
  updatedDt: DateTime;
  Author?: AuthorEntity;
  authorId?: number;
}
