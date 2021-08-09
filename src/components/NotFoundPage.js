import {NavLink} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='main not-found-container'>
      <h2>404!</h2>
      <h2>Not Found Page</h2>
      <NavLink className='not-found-link' to='/'>Go back home</NavLink>
    </div>
  )
}

export default NotFoundPage