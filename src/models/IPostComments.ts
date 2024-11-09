import {IPost} from "./IPost";
import {IComment} from "./IComment";

export interface IPostComments {
    post: IPost
    comments: IComment[]
}