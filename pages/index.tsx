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
        <Title className='text-center'>I'm Ilyas and I'm Donkey</Title>
        <Title order={2} className='text-center'>Bad Chess Player with no experiencee in any field </Title>
        <Title order={2} className='text-center text-teal-500'>Sorry But I'm Dumb 😂</Title>
        <div className='flex justify-center mt-5'>
          <Button component={NextLink} href='/blog' size='lg' color='pink'>Explore</Button>
        </div>
      </div>
    </>
  )
}

export default Home
