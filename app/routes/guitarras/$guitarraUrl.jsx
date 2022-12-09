import { useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";
import { getGuitarra } from "~/models/guitarras.server";


export async function loader({ params }) {

    const { guitarraUrl } = params
    // console.log(guitarraUrl);
    const guitarra = await getGuitarra(guitarraUrl);
    
    if(guitarra.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    }

    return guitarra
}



export function meta({data}) {
    if(!data){
        return{
            title: 'GuitarLA - Guitarra no encontrada',
            description: `Guitarras, venta de guitarras, guitarra no encontrada}`
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}}`

    }
}

const Guitarra = () => {

    const guitarra = useLoaderData();
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

    return (

        <div className="contenedor guitarra">
            <img src={imagen.data.attributes.url} alt={`Imagen de la guitarra de ${nombre}`} className="imagen" />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">€ {precio}</p>
                <Link className="enlace enlaceInicio" to={`/guitarras`}>Volver</Link>
            </div>
        </div>

    )
}

export default Guitarra;
