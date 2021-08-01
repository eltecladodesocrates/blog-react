import React, {useReducer} from 'react'
import { sectionReducer } from '../reducers/postReducer'
import { userReducer } from '../reducers/userReducer'

export const PostsContext = React.createContext()

const BlogContextApp = ({children}) => {
    const [state, dispatch] = useReducer(sectionReducer, [])
    const [user, dispatchUser] = useReducer(userReducer, [])

    return (
        <PostsContext.Provider value={{state, dispatch, user, dispatchUser}}>
            {children}
        </PostsContext.Provider>
    )
}

export default BlogContextApp