import React, {useContext} from 'react'
import PostsContext from '../context/posts-context'

const Post = ({ post }) => {

    const {state, dispatch} = useContext(PostsContext)

    return (
        <div>
            {console.log('Post', state)}
        </div>
    )
}

export default Post