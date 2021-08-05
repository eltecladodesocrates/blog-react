import React, {useReducer, useEffect} from 'react'
import { sectionReducer } from '../reducers/postReducer'
import { userReducer } from '../reducers/userReducer'
import { renderPosts } from '../actions/postActions'
import { saveToDb, renderData } from '../db/firebase'

export const PostsContext = React.createContext()

const BlogContextApp = ({children}) => {
    const [state, dispatch] = useReducer(sectionReducer, [])
    const [user, dispatchUser] = useReducer(userReducer, [])
    console.log('from context', state);

    useEffect( () => {
        // const postsData = JSON.parse(localStorage.getItem('posts'))
        renderData(dispatch)
        // console.log(postsData);

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