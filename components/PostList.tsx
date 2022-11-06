import { Button, Grid, Title, useMantineColorScheme } from "@mantine/core"
import { NextLink } from "@mantine/next"
import { NextPage } from "next"
import { IPost } from "../utils/types/Posts"
import Image from 'next/future/image'

interface PostInterface {
    post: IPost
}

const PostsList: NextPage<PostInterface> = ({ post }) => {

    const { colorScheme } = useMantineColorScheme()
    const nativeClass = colorScheme === 'dark' ? " p-2 bg-gray-800 rounded" : " p-2 shadow-xl rounded"

    return (
        <Grid.Col md={6} lg={4} className='mb-10' >
            <div className={nativeClass}>
                <Image className="w-full" src={post.coverImage} alt="" width={120} height={180} />
                <Title order={4} className="py-5 text-center"> {post.title} </Title>

                <div className="flex justify-center py-2">
                    <Button size='md' color='pink' component={NextLink} href={`/blog/${post.id}`}>Read more</Button>
                </div>
            </div>
        </Grid.Col>
    )
}

export default PostsList