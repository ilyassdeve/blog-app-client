import { Button, Container, Input, Title } from "@mantine/core"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { axiosBaseUrl } from "../axios/axios"
import { IAxiosUser, IUser } from "../utils/types/User"


const Register: NextPage = () => {

    const router = useRouter()
    const [username, setUserName] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')

    const handleRegisterPath = () => {
        router.push('/login')
    }

    const handleRegister = async () => {

        try {
            if (username?.trim() !== '' && userPassword.trim() !== '') {

                const registerUser: IAxiosUser = await axiosBaseUrl.post('/register/create', {
                    username,
                    password: userPassword
                })
                toast.success('user created')
                localStorage.setItem('ilyass_dumb_app_user_ID', String(registerUser.data.id))

            }
        } catch (error) {
            toast.error('error Ocuured Try Again')
        }
    }


    return (
        <Container className="my-20">
            <Input size="lg" placeholder="username" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
            <Input className="my-10" size="lg" placeholder="Password" type='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value)} />
            <Button size="md" fullWidth color='pink' onClick={handleRegister} >Register</Button>
            <Toaster />
            <div className="mt-10 flex justify-center">
                <div className="flex">
                    <Title order={5}>Already Have an Account?</Title>
                    <Title onClick={handleRegisterPath} className="ml-2 text-teal-500 cursor-pointer" order={5}>Login</Title>
                </div>
            </div>

        </Container>
    )
}

export default Register