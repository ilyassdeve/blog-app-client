import { Button, Container, Input, Text, Textarea, Title } from "@mantine/core"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import Image from "next/future/image"
import { axiosBaseUrl } from "../../../axios/axios"
import toast, { Toaster } from "react-hot-toast"

import Head from "next/head"
const Create = () => {

    const [postTitle, setPostTitle] = useState<string>('')
    const [postBody, setPostBody] = useState<string>('')
    const [postCoverImage, setPostCoverImage] = useState<string | ArrayBuffer | null>()

    const handleCreatePost = async () => {
        try {
            const response = await axiosBaseUrl.post('/posts/create', {
                title: postTitle.trim(),
                coverImage: postCoverImage,
                body: postBody
            })
            toast.success('post Created Successfully')
        } catch (error) {
            toast.error('Something Went Wrong Please Try Again')
        }

    }

    return (

        <>
            <Head>
                <title> Create Post </title>
            </Head>
            <Container className="py-5">
                <Title className="text-center mb-5">Create Your Post</Title>
                <Toaster />
                <Text className="mb-2">Cover Image</Text>
                <Input
                    size="md"
                    type='file'
                    onChange={(e: any) => {
                        const reader = new FileReader();
                        reader.onload = () => {
                            setPostCoverImage(reader.result)
                        };
                        reader.readAsDataURL(e.target.files[0]);

                    }}
                />
                <Input
                    className="mt-5"
                    size="md"
                    placeholder="Post Title .."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPostTitle(e.target.value)}
                />
                <Textarea
                    className="mt-5"
                    placeholder="Post Body ..."
                    minRows={5}
                    autosize
                    size="md"
                    onChange={(e) => setPostBody(e.target.value)}
                />

                <div className="pt-20">
                    <Text className="bg-red-400 text-center p-5 text-black mb-5">Preview Of Your Post</Text>
                    {postCoverImage && (
                        <Image src={postCoverImage.toString()} className='w-full' alt="hello" width={500} height={300} />
                    )}
                    <Title className="text-center my-5"> {postTitle.toUpperCase()} </Title>
                    <ReactMarkdown>
                        {postBody}
                    </ReactMarkdown>

                    <div className="flex justify-center my-10">
                        <Button size="md" color='teal' onClick={handleCreatePost}>Create Post</Button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Create