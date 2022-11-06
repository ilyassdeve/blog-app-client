import { IUser } from "./User"

export interface IComment {
    id: number
    body: string
    postTitle: string
    author: IUser
    authorId: number
}
export interface IAxiosComment {
    data: IComment
}