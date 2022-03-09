import Head from "next/head"
import { FC } from "react"
import { NavBar } from '../ui';

interface Props {
    title?: String
}
const origin = (typeof window === 'undefined') ? '' : window.location.origin
export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>

                <link rel="shortcut icon" href="./favicon.png" />

                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Jorge Ochipinti" />
                <meta property="og:title" content={`info about ${title}`} />
                <meta property="og:description" content={`this is a pag about ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <NavBar />
            <main>
                {children}
            </main>

        </>
    )
}