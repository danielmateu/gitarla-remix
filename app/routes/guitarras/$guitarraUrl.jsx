import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getGuitarra } from "~/models/guitarras.server";


export async function loader({ params }) {

    const { guitarraUrl } = params
    // console.log(guitarraUrl);
    const guitarra = await getGuitarra(guitarraUrl);

    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    }

    return guitarra
}



export function meta({ data }) {
    if (!data) {
        return {
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

    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData();
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

    const handleSubmit = e => {
        e.preventDefault();
        if(cantidad < 1){
            alert('Debes seleccionar una cantidad');
            return;
        }

        const guitarraSeleccionada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        console.log(guitarraSeleccionada)
    }

    return (

        <div className="contenedor guitarra">
            <img src={imagen.data.attributes.url} alt={`Imagen de la guitarra de ${nombre}`} className="imagen" />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">€ {precio}</p>

                <form
                    onSubmit={handleSubmit}
                    className="formulario"
                >
                    <label htmlFor="cantidad">Cantidad</label>
                    <select
                        onChange={e => setCantidad(parseInt(e.target.value))}
                        id="cantidad"
                    >
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input type="submit" value='Agregar al carrito' />

                </form>

                <Link className="enlace enlaceInicio" to={`/guitarras`}>Volver</Link>
            </div>
        </div>

    )
}

export default Guitarra;
