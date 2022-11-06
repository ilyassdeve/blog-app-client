import { Center, Container, Grid, Loader } from "@mantine/core"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { axiosBaseUrl } from "../axios/axios"
import PostsList from "../components/PostList"
import { IAxiosPosts, IPost } from "../utils/types/Posts"

import Head from "next/head"

const Blog: NextPage = () => {

  const [fetchedPosts, setPosts] = useState<IPost[]>()
  const [fetchingError, setFetchinGError] = useState<string>('')

  const fetchAllPosts = async () => {
    try {
      const posts: IAxiosPosts = await axiosBaseUrl.get('/posts')
      setPosts(posts.data)
      return posts.data
    } catch (error) {
      setFetchinGError('Unexpected Error occureed Please Try Again')
    }
  }

  useEffect(() => {
    fetchAllPosts()
  }, [])

  if (!fetchedPosts) {
    return (
      <>
        <Head>
          <title>Blogs</title>
        </Head>
        <Center className="mt-40">
          <Loader size="xl" variant="dots" />;
        </Center>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <Container>
        <Grid gutter='xl'>
          {fetchedPosts && fetchedPosts.map((post, index) => (
            <PostsList key={index} post={post} />
          ))}
          {fetchingError && <div> {fetchingError} </div>}
        </Grid>
      </Container>
    </>
  )
}

export default Blog