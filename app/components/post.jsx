import { Link } from "react-router-dom";
import formatearFecha from "~/utils/helpers";


export const Post = ({ post }) => {
    const { titulo, contenido, imagen, url, publishedAt } = post;
    return (
        <article className="post">
            <img className='imagen' src={imagen.data.attributes.formats.medium.url} alt={`imagen blog ${titulo}`} />
            <div className="contenido">
                <h3 className="titulo">{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="resumen">{contenido}</p>
                <Link to={`/posts/${url}`} className='enlace'>Leer post</Link>
            </div>
        </article>
    )
}
