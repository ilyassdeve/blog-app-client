import { Button, Input, Title } from "@mantine/core"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from 'react'

import toast, { Toaster } from 'react-hot-toast';
import { axiosBaseUrl } from "../../axios/axios";
import { IAxiosComment } from "../../utils/types/Comments";

const Comments: NextPage = () => {


    const router = useRouter()
    const [comment, setComment] = useState<string>('')


    const { id } = router.query
    const handleCreateComment = async () => {

        const authorId = localStorage.getItem('ilyass_dumb_app_user_ID')
        console.log('userId', authorId)



        if (authorId) {
            try {
                const response: IAxiosComment = await axiosBaseUrl.post('/comments/create', {
                    body: comment,
                    authorId: Number(authorId),
                    postTitle: String(id),
                    postId: Number(id)
                })

                toast.success('comment created Successfully')
                router.reload()


            } catch (error) {
                console.log(error)
                toast.error('Unexpected Error While Creating Comment Try Again! ')
            }

        }

        if (!authorId) {

            router.push('/login')
        }

    }
    return (
        <div className="flex justify-center my-10">
            <section >

                <div className="pt-2">
                    <Input size="lg" className="w-80" placeholder="your comment..." value={comment} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)} />
                </div>
                <div className="mt-5 flex justify-center">
                    <Button color='pink' size="md" onClick={handleCreateComment}>Comment</Button>
                </div>

            </section>

            <Toaster />
        </div>
    )
}

export default Comments