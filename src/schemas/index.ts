export interface TagInterface {
    _id: string,
    name: string,
    createdAt: number,
}

export interface PostInterface {
    _id: string;
    title: string;
    tag: TagInterface;
    readingTime: number;
    createdAt: number
}

export interface PostsInterface extends Array<PostInterface>{}