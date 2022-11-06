import { AppShell, Avatar, Burger, Button, Header, MediaQuery, Title, useMantineColorScheme, useMantineTheme } from "@mantine/core"
import { NextPage } from "next"
import NavigationItems from "../components/NavigationItems"

import { MdDarkMode } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'

import { RiAccountPinCircleLine } from 'react-icons/ri'
import { NextLink } from "@mantine/next"
import { useState } from 'react'
import DrawerNavigation from "./DraweNavigation"
import Link from "next/link"

interface NavBarProps {
    children: JSX.Element
}

const Navbar: NextPage<NavBarProps> = ({ children }) => {

    const { toggleColorScheme, colorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div>
            <AppShell
                header={
                    <Header height={70} p="md" className="bg-gray-900">
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>

                            <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
                                <section >
                                    <div className="flex">
                                        <Burger
                                            opened={open}
                                            onClick={() => setOpen(true)}
                                            size="sm"
                                            color={theme.colors.gray[6]}
                                            mr="xl"
                                        />
                                        <div >
                                            <Title color='orange' className="cursor-pointer" order={3}>Chess GM</Title>
                                        </div>
                                    </div>
                                </section>
                            </MediaQuery>


                            <DrawerNavigation opened={open} setOpened={setOpen} />
                            <section className="w-full flex justify-around hide_media_query">
                                <div className="pt-1">
                                    <Link href='/'>
                                        <Title className="cursor-pointer" color='orange' order={3}>Chess GM</Title>
                                    </Link>
                                </div>
                                <div>
                                    <NavigationItems />
                                </div>
                                <div className="flex">

                                    <Avatar color='pink' className="cursor-pointer" onClick={() => toggleColorScheme()}>
                                        {colorScheme === 'dark' ? <BsSun size='30px' /> : <MdDarkMode size='30px' />}
                                    </Avatar>
                                    <Button className="ml-5" leftIcon={<RiAccountPinCircleLine size='20px' />} component={NextLink} href='/login'>
                                        Login
                                    </Button>
                                </div>
                            </section>

                        </div>
                    </Header>
                }
            >
                {children}
            </AppShell>
        </div>
    )
}

export default Navbar