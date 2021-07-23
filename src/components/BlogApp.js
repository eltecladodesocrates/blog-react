import React, {useReducer} from 'react'
import PostsContext from '../context/posts-context'
import { sectionReducer } from '../reducers/postReducer'

import AppRouter from '../routers/AppRouter'
import Post from './Post'
import CreatePost from './CreatePost'
import Header from './Header'

const BlogApp = () => {

    const [state, dispatch] = useReducer(sectionReducer, [])

    return (
        <div>
            <PostsContext.Provider value={{state, dispatch}}>
                <CreatePost />
                <Post />
            </PostsContext.Provider>
        </div>
    )
}



export default BlogApp