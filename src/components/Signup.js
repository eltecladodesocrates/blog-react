import React, {useContext} from 'react'
import { AuthContext } from '../context/auth-context'

const Signup = ({history}) => {

    const {user, userDispatch} = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()
        // dispatchUser(addUser(
        //     e.target.userName.value,
        //     e.target.userPassword.value,
        // ))
        history.push('/')
    }

    return (
        <div>
            {console.log(user)}
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input type="text" name='userName' placeholder='Email' />
                <input type="password" name='userPassword' placeholder='Enter Password' />
                <input type="password" name='reUserPassword' placeholder='Re Enter Password' />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup