import React from 'react'

const Login = ({history}) => {

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('SUccesfully Logged in')
        e.target.userName.value = ''
        e.target.userPassword.value = ''
        history.push('/')
    }

    return (
        <div className='main'>
            <h1>Log In</h1>
            <form onSubmit={handleLogin}>
                <input type="text" name='userName' placeholder='Email'/>
                <input type="password" name='userPassword' placeholder='Password' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login