import { Recipe} from "./recipe"
import { UserId } from "./userId";

export interface Post {
    likes: string[];
    _id: string;
    text: string;
    userId: UserId;
    themeId: Recipe;
    created_at: string;
    updatedAt: string;
    __v: number;
}