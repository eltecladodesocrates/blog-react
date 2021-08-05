import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'> 
        <h1>El Teclado de Socrates Blog</h1>
        <ul>
          <li><NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink></li>
          <li><NavLink to='/create' activeClassName='is-active'>Create Post</NavLink></li>
          <li><NavLink to='/login' activeClassName='is-active'>Log In</NavLink></li>
          {/* <li><NavLink to='/signup' activeClassName='is-active'>Sign Up</NavLink></li> */}
        </ul>
      </div>
    </header>
  )
}

export default Header
