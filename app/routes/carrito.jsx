import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/carrito.css'


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta() {
    return{
        title: 'GuitarLA - Carrito de compras',
        description: 'Venta de guitarras, musica, blog, carrito de compras, tienda'
    }
}

const Carrito = () => {
    const {carrito} = useOutletContext();
    console.log(carrito)
    return (
        <main className="contenedor">
            <h1 className="heading">Carrito de compras</h1>

            <div className="contenido">
                <div className="carrito">
                    <h2>Articulos</h2>
                </div>


                <aside className="resumen">
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: €</p>
                </aside>
            </div>

        </main>
    )
}

export default Carrito;