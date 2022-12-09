import { useLoaderData } from "@remix-run/react";
import { ListadoPosts } from "~/components/listadoPosts";

import { getPosts } from "~/models/posts.server"




export function meta() {
    
        return{
            title: 'GuitarLA - Nuestro Blog',
            description: `Guitarras, blog de música y venta de guitarras`
        }
    
}

export async function loader(){
    const posts = await getPosts();
    console.log(posts);

    return posts.data
}

const Blog = () => {

    const posts = useLoaderData();

    return (
            <ListadoPosts
                posts={posts}    
            />
    )
}

export default Blog