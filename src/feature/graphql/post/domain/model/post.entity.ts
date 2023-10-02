// 여기 애매해!! 모르겠다!!!

import { PostInterface } from './dto/post.interface';

export class PostEntity implements PostInterface {
  private readonly _id: number;
  private readonly _title: string;
  private readonly _votes: number;
  private readonly _content: string;
  private readonly _name: string;
  private readonly _createdDt: Date; // graphQL datetime 맞아? -> 아님!!! js의 date!!
  private readonly _updatedDt: Date;
  private readonly _authorId: number;

  // 관계 달린 애들은 정의 안한다!!
  // private readonly _Author?: AuthorEntity;

  // prisma가 반환한 데이터를 PostEntity의 멤버 값으로 할당한다.
  constructor(prisma: PostInterface) {
    this._id = prisma.id;
    this._title = prisma.title;
    this._votes = prisma.votes;
    this._content = prisma.content;
    this._name = prisma.name;
    this._createdDt = prisma.createdDt;
    this._updatedDt = prisma.updatedDt;
    this._authorId = prisma.authorId;
  }

  // 얘네 구현해야 entity의 멤버에 접근할 수 있다.
  // get 키워드는 뭐지?
  get id(): number {
    return this._id;
  }
  get title(): string {
    return this._title;
  }
  get votes(): number {
    return this._votes;
  }
  get content(): string {
    return this._content;
  }
  get name(): string {
    return this._name;
  }
  get createdDt(): Date {
    return this._createdDt;
  }
  get updatedDt(): Date {
    return this._updatedDt;
  }
  get authorId(): number {
    return this._authorId;
  }
}
