

import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link,
} from '@remix-run/react'
import { useState, useEffect } from 'react'
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

    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null;
    const [carrito, setCarrito] = useState(carritoLS);

    /* Saving the state of the cart in the local storage. */
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])
    

    const agregarCarrito = guitarra => {
        // console.log('Agregando...', guitarra)
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            // console.log('Ese elemento ya existe')
            //Iterar sobre el arreglo e identificar el elemento duplicado
            const carritoActualizado = carrito.map(guitarraState => {
                if(guitarraState.id === guitarra.id){
                    //Reescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad
                    // guitarraState.cantidad += guitarra.cantidad
                }
                return guitarraState
            })
            //añadir al carrito
            setCarrito(carritoActualizado)
        }else{
            //Registro nuevo
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado);
    }

    const eliminarGuitarra = id => {
        // const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id);
        // setCarrito(carritoActualizado);
        setCarrito( carrito.filter(guitarraState => guitarraState.id !== id));
    }

    return(
        <Document>
            <Outlet
                context={{
                    // guitarLa: 'GuitarLA',
                    // auth: true
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
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


// MANEJO DE ERRORES

export function CatchBoundary(){
    const error = useCatch();
    return(
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link to='/tienda' className="error-enlace">Quieres volver a la tienda?</Link>
        </Document>
    )

}

export function ErrorBOundary({error}){

    return(
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link to='/tienda' className="error-enlace">Quieres volver a la tienda?</Link>
        </Document>
    )

}
