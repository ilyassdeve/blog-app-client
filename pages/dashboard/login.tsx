import { Button, Container, Input, Title } from "@mantine/core"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from 'react'


const Login: NextPage = () => {

  const router = useRouter()
  const [userEmail, setUserEmail] = useState<string>()
  const [userPassword, setUserPassword] = useState<string>()
  const [loginError, setLoginError] = useState<string>()

  const dummyAdminData = {
    email: 'ilyasaitali@gmail.com',
    password: "IlyassAitAli20005"
  }

  const handleAdminLogin = () => {
    if (userEmail === dummyAdminData.email && userPassword === dummyAdminData.password) {
      setLoginError('')
      localStorage.setItem('ilyass_dumb_app_user_EMAIL', userEmail)
      router.push('/dashboard')
    } else {
      setLoginError('Email or Password are incorrect')
    }
  }

  return (
    <Container className="my-20">
      <Input size="lg" placeholder="Email Address" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value)} />
      <Input className="my-10" size="lg" placeholder="Password" type='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value)} />
      {loginError && (
        <Title order={3} className="text-center text-red-500 mb-5"> {loginError} </Title>
      )}

      <Button size="md" fullWidth color='pink' onClick={handleAdminLogin} >Login</Button>
    </Container>
  )
}

export default Login