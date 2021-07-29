import {NavLink} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <h1>404! Not Found Page</h1>
      <NavLink to='/'>Home</NavLink>
    </div>
  )
}

export default NotFoundPage