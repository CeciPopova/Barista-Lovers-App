import { Post } from "./post";
import { UserId } from "./user";



export interface Theme {
    subscribers: string[];
    posts: string[] | Post[];
    _id: string;
    themeName: string;
    userId: UserId;
    created_at: string;
    updatedAt: string;
    __v: number;
}