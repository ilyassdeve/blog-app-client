import { IComment } from "./Comments"

export interface IUser {
    id: number
    username: string
    password: string
    comments: IComment[]
}
export interface IAxiosUser {
    data: IUser
}
