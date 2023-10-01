// author dto의 변환(transformer 역할?)

import { AuthorInterface } from './dto/author.interface';

export class AuthorEntity {
  private readonly _id: number;
  private readonly _createdAt: Date;
  private readonly _updatedAt: Date;

  constructor(prisma: AuthorInterface) {
    this._id = prisma.id;
    this._createdAt = prisma.createdAt;
    this._updatedAt = prisma.updatedAt;
  }
}
