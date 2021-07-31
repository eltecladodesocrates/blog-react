import React from 'react'

const Signup = ({history}) => {

    const handleSignUp = e => {
        console.log('Successfully Signed Up')
        history.push('/')
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Enter Password' />
                <input type="password" placeholder='Re Enter Password' />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup