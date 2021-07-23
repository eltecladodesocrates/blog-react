import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>El Teclado de Socrates Blog</h1>
      <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
      <NavLink to='/create' activeClassName='is-active'>Create Post</NavLink>
    </header>
  )
}

export default Header
