import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";

import ListadoGuitarras from '../components/listadoGuitarras';
import styles from "~/styles/guitarras.css"


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export const loader = async () => {

    const [guitarras, posts] = await Promise.all([
        getGuitarras(),
        getPosts(),
    ])

    return {
        guitarras: guitarras.data,
        posts: posts.data
    }
}

export function meta() {
    return {
        title: 'GuitarLA - Inicio',
        description: 'GuitarLA - Nuestra colección de guitarras'

    }
}


export const Index = () => {

    const { guitarras, posts } = useLoaderData();

    return (

        <>
            <main className="contenedor">
                <ListadoGuitarras
                    guitarras={guitarras}
                />
            </main>
        </>
    )
}

export default Index;

