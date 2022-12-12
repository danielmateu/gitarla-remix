import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'
// import { useOutletContext } from '@remix-run/react'



export function meta() {
    return {
        title: 'GuitarLA - Nosotros',
        description: 'Venta de guitarras, blog de música y más'
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}


const Nosotros = () => {



    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt="Imagen sobre nosotros" />
                <div>
                    <p>
                        Bienvenido a nuestra tienda online de guitarras. Somos una empresa dedicada a la venta de guitarras de alta calidad de diferentes marcas reconocidas en el mundo de la música.
                    </p>
                    <p>
                        Ofrecemos una amplia selección de guitarras acústicas, eléctricas y clásicas para satisfacer las necesidades de todos los músicos, desde principiantes hasta profesionales.
                    </p>
                    <p>
                        Además, contamos con un equipo de expertos en guitarras que están dispuestos a ayudarlo en su elección y a responder cualquier pregunta que pueda tener. ¡Explora nuestro catálogo y encuentra la guitarra perfecta para ti!
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros