import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/posts.server'
import styles from '~/styles/blog.css'


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

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
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
        <article className='contenedor post mt-3'>
            <img className='imagen' src={imagen.data.attributes?.formats.medium.url} alt={`imagen blog ${titulo}`} />
            <div className="contenido">
                <h3 className="titulo">{titulo}</h3>
                <p className="texto">{contenido}</p>
                {/* <Link to={`/posts/${url}`} className='enlace'>Leer post</Link> */}
            </div>
        </article>
    )
}



