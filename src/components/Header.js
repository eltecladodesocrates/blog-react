import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import Logout from './Logout'

const Header = () => {

  const {user} = useContext(AuthContext)

  return (
    <header className='header'>
      <div className='container header-container'> 
        {/* <h1>El Teclado de Socrates Blog</h1> */}
        <ul>
          <li><NavLink to='/' exact={true}><h1 className='header-title'>El Teclado de Sócrates</h1></NavLink></li>
          {user.email && <li><NavLink to='/create' activeClassName='is-active'>Create Post</NavLink></li>}
          {user.email && <li><Logout /></li>}
          {/* <li><NavLink to='/login' activeClassName='is-active'>Log In</NavLink></li> 
          <li><NavLink to='/signup' activeClassName='is-active'>Sign Up</NavLink></li> */}
        </ul>
      </div>
    </header>
  )
}

export default Header
