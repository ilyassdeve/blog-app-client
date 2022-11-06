import { Button, Container, Input, Title } from "@mantine/core"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from 'react'
import toast, { Toaster } from "react-hot-toast"
import { axiosBaseUrl } from "../axios/axios"
import { IAxiosUser } from "../utils/types/User"


const Login: NextPage = () => {

    const router = useRouter()
    const [username, setUsername] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')
    const [requestError, setUserError] = useState<string>('')

    const handleRegisterPath = () => {
        router.push('/register')
    }

    const handleLogin = async () => {
        try {
            if (username?.trim() !== '' && userPassword.trim() !== '') {

                const loginUser: IAxiosUser = await axiosBaseUrl.post('/login', {
                    username,
                    password: userPassword
                })
                toast.success('user logged in successfully')
                localStorage.setItem('ilyass_dumb_app_user_ID', String(loginUser.data.id))

            }
        } catch (error) {
            toast.error('Please Try Again')
        }
    }


    return (
        <Container className="my-20">
            <Input size="lg" placeholder="username" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
            <Input className="my-10" size="lg" placeholder="Password" type='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value)} />
            {requestError && (
                <Title className="text-red-500 my-5 text-center" order={5}> {requestError} </Title>
            )}
            <Button size="md" fullWidth color='pink' onClick={handleLogin} >Login</Button>
            <Toaster />
            <div className="mt-10 flex justify-center">
                <div className="flex">
                    <Title order={5}>Do not Have Account?</Title>
                    <Title onClick={handleRegisterPath} className="ml-2 text-teal-500 cursor-pointer" order={5}>Register</Title>
                </div>
            </div>
        </Container>
    )
}

export default Login