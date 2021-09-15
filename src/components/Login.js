import React, {useState, useContext} from 'react'
import { AuthContext } from '../context/auth-context'
import {startLoginUser} from '../actions/userActions'

const Login = ({history}) => {

    const {user, userDispatch} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        startLoginUser(userDispatch, email, password)
        // setEmail('')
        // setPassword('')
    }

    return (
        <div className='main'>
            {console.log('From Loggin', user)}
            <h1>Log In</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='Email' value={email} onChange={ e => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' value={password} onChange={ e => setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login