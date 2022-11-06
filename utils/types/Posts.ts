import { IComment } from "./Comments"

export interface IPost {
    id: number
    title: string
    coverImage: string
    body: string
    createAt: string
    comments: IComment[]
}
export interface IAxiosPosts {
    data: IPost[]
}
export interface IAxiosPost {
    data: IPost
}