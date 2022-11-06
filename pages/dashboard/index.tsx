import { Button, Title } from "@mantine/core"
import { NextLink } from "@mantine/next"
import type { NextPage } from "next"
import { useRouter } from 'next/router'

import { useEffect } from "react"
import Head from "next/head"

const HomeDashboard: NextPage = () => {

    const router = useRouter()

    useEffect(() => {
        const userId = localStorage.getItem('ilyass_dumb_app_user_EMAIL')
        if (!userId) {
            router.push('/dashboard/login')
        }
    }, [])
    return (
        <>
            <Head>
                <title> DashBoard </title>
            </Head>
            <div className="py-20">
                <Title className="text-center" order={2}> Hi Ilyas AIT Ali</Title>
                <Title className="text-center pt-2" order={2}> You're so dumb Today 🤣😂</Title>
                <div className="flex justify-center pt-10">
                    <Button component={NextLink} href='/dashboard/posts/create' color='lime' size="md"> Create Post </Button>
                    {/* <Button className="ml-10" component={NextLink} href='posts' color='lime' size="md"> View Posts </Button> */}
                </div>
            </div>
        </>
    )
}

export default HomeDashboard