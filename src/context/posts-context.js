import React, {useReducer, useEffect} from 'react'
import { sectionReducer } from '../reducers/postReducer'
import { userReducer } from '../reducers/userReducer'
import { startRenderPosts } from '../actions/postActions'

export const PostsContext = React.createContext()

const BlogContextApp = ({children}) => {
    const [state, dispatch] = useReducer(sectionReducer, [])
    const [user, dispatchUser] = useReducer(userReducer, [])
    console.log('from context', state);

    useEffect( () => {
        startRenderPosts(dispatch)
    }, [])
    
    // useEffect(() => {
    //     // localStorage.setItem('posts', JSON.stringify(state))
    //     console.log('state is changing (context)', [state])
    // }, [state])

    return (
        <PostsContext.Provider value={{state, dispatch, user, dispatchUser}}>
            {children}
        </PostsContext.Provider>
    )
}

export default BlogContextApp