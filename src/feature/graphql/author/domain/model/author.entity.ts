// author dto의 변환(transformer 역할?)

import { AuthorInterface } from './dto/author.interface';

export class AuthorEntity {
  private readonly _id: number;
  private readonly _firstName: string;
  private readonly _lastName: string;

  constructor(prisma: AuthorInterface) {
    this._id = prisma.id;
    this._firstName = prisma.firstName;
    this._lastName = prisma.lastName;
  }
}
