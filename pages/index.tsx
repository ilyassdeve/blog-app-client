import { Button, Title } from '@mantine/core'
import { NextLink } from '@mantine/next'
import type { NextPage } from 'next'
import Head from 'next/head'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='my-40'>
        <Title className='text-center'>Hello There</Title>
        <Title order={2} className='text-center'>I'm Ilyas I'm chess player </Title>
        <Title order={2} className='text-center text-teal-500'>I will Teach you Chess For Free</Title>
        <div className='flex justify-center mt-5'>
          <Button component={NextLink} href='/blog' size='lg' color='pink'>Explore</Button>
        </div>
      </div>
    </>
  )
}

export default Home
