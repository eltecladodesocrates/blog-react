import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {PostsContext} from '../context/posts-context'

const Posts = () => {

    const {state} = useContext(PostsContext)

    return (
        <div>
            {state && state.map(post => (
                <Link key={post.id} to={`post/${post.id}`}>
                    <h2>{post.title}</h2>
                </Link>
            ))}
        </div>
    )
}

export default Posts