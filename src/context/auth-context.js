import React, { createContext, useReducer, useEffect } from 'react'
import { userReducer } from '../reducers/userReducer'
import { startGetUser } from '../actions/userActions'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [user, userDispatch] = useReducer(userReducer, {})

    useEffect(() => {

        !user && startGetUser(userDispatch)
    })

    return (
        <AuthContext.Provider value={{ user, userDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider