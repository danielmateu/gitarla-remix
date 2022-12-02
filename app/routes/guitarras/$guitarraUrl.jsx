import { useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";
import { getGuitarra } from "~/models/guitarras.server";
import styles from "~/styles/guitarras.css"

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta({data}) {

    

    return {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}}`

    }
}

export async function loader({ params }) {

    const { guitarraUrl } = params
    // console.log(guitarraUrl);

    const guitarra = await getGuitarra(guitarraUrl);


    return guitarra
}

const Guitarra = () => {

    const guitarra = useLoaderData();
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

    return (

        <main className="contenedor guitarra">
            <img src={imagen.data.attributes.url} alt={`Imagen de la guitarra de ${nombre}`} className="imagen" />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">€ {precio}</p>
                <Link className="enlace enlaceInicio" to={`/tienda`}>Volver</Link>
            </div>
        </main>

    )
}

export default Guitarra;
