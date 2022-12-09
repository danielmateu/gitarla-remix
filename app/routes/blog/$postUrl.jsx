import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/posts.server'

export function meta({data}) {
    
    if(!data){
        return{
            title: 'GuitarLA - Entrada no encontrada',
            description: `Guitarras, blogs de musica, Entrada no encontrada}`
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.titulo}`,
        description: `Guitarras, blogs de musica, guitarra ${data.data[0].attributes.titulo}}`

    }

}

export async function loader({ params }) {
    const { postUrl } = params;

    const post = await getPost(postUrl);
    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }

    return post
}

export default function Post(){

    const post = useLoaderData();

    console.log(post)
    const { titulo, contenido, imagen } = post.data[0]?.attributes;

    return (
        <article className='post mt-3'>
            <img className='imagen' src={imagen.data.attributes?.formats.medium.url} alt={`imagen blog ${titulo}`} />
            <div className="contenido">
                <h3 className="titulo">{titulo}</h3>
                <p className="texto">{contenido}</p>
            </div>
        </article>
    )
}



