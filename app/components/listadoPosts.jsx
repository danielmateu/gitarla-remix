import React from 'react'
import { Post } from './post'

export const ListadoPosts = ({ posts }) => {

    return (
        <>
            {/* <div className="heading">Nuestros Posts</div> */}

            {
                posts.length && (
                    <div className="posts-grid">

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

                    </div>
                )

            }
        </>
    )
}
