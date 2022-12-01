import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
} from '@remix-run/react'
import  Header  from '~/components/header'
import styles from '~/styles/index.css'
import { Footer } from './components/footer'


export function meta() {
    return (
        {
            charset:'utf-8',
            title: 'GuitarLA - Remix',
            viewport: 'width=device-width,initial-scale=1'
        }
    )
}



export function links(){
    return [
        {
            rel: 'stylesheet',
            href: 'https://csstools.github.io/normalize.css/11.0.0/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
            crossOrigin: 'true'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Poppins&family=Roboto:wght@500&family=Supermercado+One&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles,
        },
    ]
}

export default function App() {

    return(
        <Document>
            <Outlet/>
        </Document>
    )
}

const Document = ({children}) => {
    return(
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}

                <Scripts/>
                <LiveReload/>

                <Footer/>
            </body>
        </html>
    )
}

