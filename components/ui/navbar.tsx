import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import NextLink from 'next/link'

export const NavBar = () => {
    const { theme } = useTheme()
    return (
        <>
            <div style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'start',
                padding: '0px 20px',
                backgroundColor: theme?.colors.gray900.value
            }}>
                <Image width={70} height={70} src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' alt="icono" />
                <NextLink href='/' passHref>
                    <Link>
                        <Text color="white" h2>P</Text>
                        <Text color="white" h3>okemon</Text>
                    </Link>
                </NextLink>


                <Spacer css={{ flex: 1 }} />
                <NextLink href='/favorites' passHref> 
                    <Link>
                        <Text color="white" h3>Favorites</Text>
                    </Link>
                </NextLink>
            </div>
        </>
    )
}