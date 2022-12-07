import { useLoaderData } from "@remix-run/react";
import { Post } from "~/components/post";
import { getPosts } from "~/models/posts.server"
import styles from '~/styles/blog.css'




export function meta() {
    return {
        title: 'GuitarLA - Blog'
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

export async function loader(){
    const posts = await getPosts();
    console.log(posts);

    return posts.data
}

const Blog = () => {

    const posts = useLoaderData();

    return (
        <main className="contenedor">
            <h2 className="heading">Blog</h2>
                <div className="blog">
                    {
                        posts.map(post => (
                            <Post
                                key={post.id}
                                post={post.attributes}
                            />
                        ))
                    }
                </div>
            
        </main>
    )
}

export default Blog