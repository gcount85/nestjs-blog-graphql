
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Author {
    id: number;
    firstName: string;
    lastName: string;
    posts: Post[];
}

export class Post {
    id: number;
    title: string;
    votes?: Nullable<number>;
    content: string;
    name: string;
    createdDt: DateTime;
    updatedDt: DateTime;
}

export abstract class IQuery {
    abstract author(id: number): Nullable<Author> | Promise<Nullable<Author>>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
