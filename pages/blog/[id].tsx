import { Container, Title, useMantineColorScheme } from "@mantine/core"
import { GetServerSideProps, NextPage } from "next"
import { axiosBaseUrl } from "../../axios/axios"
import { IAxiosPost, IPost } from "../../utils/types/Posts"
import ReactMarkdown from "react-markdown"
import CreateComment from "../../components/Comments/CreateComment"
import CommentList from "../../components/Comments/CommentList"

import Image from 'next/future/image'
import Head from 'next/head'

interface GetServer {
    post: IPost
}

const BlogId: NextPage<GetServer> = ({ post }) => {


    const { colorScheme } = useMantineColorScheme()

    const class_dark_light = colorScheme === 'dark' ? 'py-10 bg-gray-900' : 'py-10 shadow-lg'


    return (
        <>
            <Head>
                <title> {post.title} </title>
            </Head>
            <Container className={class_dark_light}>
                <Image src={post.coverImage.toString()} className='w-full' alt="hello" width={500} height={400} />
                <Title className="text-center mt-10"> {post.title.toUpperCase()} </Title>
                <Container className="mb-20">
                    {post.body && <ReactMarkdown>
                        {post.body}
                    </ReactMarkdown>}
                </Container>

            </Container>
            <CreateComment />
            <Container>
                <CommentList comments={post.comments} />
            </Container>
        </>
    )
}

export default BlogId



export const getServerSideProps: GetServerSideProps = async (context: any) => {

    const id = context.params.id
    try {
        const postData: IAxiosPost = await axiosBaseUrl.get(`/posts/${id}`)
        const post: IPost = postData.data
        return {
            props: {
                post
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: '/500',
                permanent: false
            }
        }
    }


}