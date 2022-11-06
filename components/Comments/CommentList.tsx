import { Avatar, Container, Text, Title, useMantineColorScheme } from "@mantine/core"
import { NextPage } from "next"
import { IComment } from "../../utils/types/Comments"


interface CommentsProps {
    comments: IComment[] | undefined
}

const CommentList: NextPage<CommentsProps> = ({ comments }) => {

    const { colorScheme } = useMantineColorScheme()
    const class_name = colorScheme === 'dark' ? 'bg-gray-800 p-5 mt-3' : 'shadow-lg p-5 mt-3'

    return (
        <Container>
            {comments?.map(comment => (

                <section className="my-10" key={comment.id}>
                    <div className="flex">
                        <Avatar src={null} alt="Vitaly Rtishchev" color="red" radius='lg'> {comment.author.username.slice(0, 2)} </Avatar>

                        <Text className="pt-1 px-5"> {comment.author.username} </Text>
                    </div>
                    <div className={class_name}>
                        <Text> {comment.body} </Text>
                    </div>
                </section>

            ))}
        </Container>
    )
}

export default CommentList