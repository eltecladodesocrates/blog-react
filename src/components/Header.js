import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>El Teclado de Socrates Blog</h1>
      <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
      <NavLink to='/create' activeClassName='is-active'>Create Post</NavLink>
      <NavLink to='/login' activeClassName='is-active'>Log In</NavLink>
      <NavLink to='/signup' activeClassName='is-active'>Sign Up</NavLink>
    </header>
  )
}

export default Header
