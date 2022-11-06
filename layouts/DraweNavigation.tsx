import { Avatar, Button, Container, Drawer, useMantineColorScheme } from "@mantine/core"
import { NextLink } from "@mantine/next"
import { NextPage } from "next"
import { navigationItems } from "../utils/navigation"
import { MdDarkMode } from 'react-icons/md'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { BsSun } from 'react-icons/bs'
interface DrawerProps {
    opened: boolean,
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const DrawerNavigation: NextPage<DrawerProps> = ({ opened, setOpened }) => {

    const { toggleColorScheme, colorScheme } = useMantineColorScheme()

    const toggleAndClose = () => {
        toggleColorScheme()
        setOpened(false)
    }
    return (
        <Drawer opened={opened} onClose={() => setOpened(false)} position='left'>
            <Container className='flex flex-col'>
                {navigationItems.map((item) => (
                    <Button onClick={() => setOpened(false)} key={item.url} component={NextLink} href={item.url} className='hover:bg-blue-400 my-2'>
                        {item.name}
                    </Button>

                ))}
                <Button onClick={() => setOpened(false)} className='hover:bg-blue-400 my-2' leftIcon={<RiAccountPinCircleLine size='20px' />} component={NextLink} href='/login'>
                    Login
                </Button>
                <div onClick={toggleAndClose} className="flex justify-center">
                    <Avatar color='pink' className="cursor-pointer mt-5" onClick={() => toggleColorScheme()}>
                        {colorScheme === 'dark' ? <BsSun size='30px' /> : <MdDarkMode size='30px' />}
                    </Avatar>
                </div>
            </Container>
        </Drawer>
    )
}

export default DrawerNavigation