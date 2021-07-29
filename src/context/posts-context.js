import React, {useReducer} from 'react'
import { sectionReducer } from '../reducers/postReducer'

export const PostsContext = React.createContext()

const BlogContextApp = ({children}) => {
    const [state, dispatch] = useReducer(sectionReducer, [])

    return (
        <PostsContext.Provider value={{state, dispatch}}>
            {children}
        </PostsContext.Provider>
    )
}

export default BlogContextApp