import React, { useContext } from 'react'
import { AuthContext } from '../context/auth-context'
import { startLogoutUser } from '../actions/userActions'

const Logout = () => {

    const {userDispatch} = useContext(AuthContext)

    const handleLogOut = e => {
        e.preventDefault()
        startLogoutUser(userDispatch)
        console.log('Bye')
    }

    return (
        <form onSubmit={handleLogOut}>
            <button>Logout</button>
        </form>
    )
}

export default Logout
