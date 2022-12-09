import { useLoaderData } from "@remix-run/react";

import ListadoGuitarras from "~/components/listadoGuitarras";
import { getGuitarras } from "~/models/guitarras.server"


export async function loader() {

    const guitarras = await getGuitarras()

    return guitarras.data;
}

export function meta() {
    return {
        title: 'GuitarLA - Nuestra tienda',
        description: 'GuitarLA - Nuestra colección de guitarras'

    }
}

const Tienda = () => {

    const guitarras = useLoaderData()

    return (

        <ListadoGuitarras
            guitarras={guitarras}
        />

    )
}

export default Tienda