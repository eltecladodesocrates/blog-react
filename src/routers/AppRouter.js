import React from 'react'
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'

import CreateSection from '../components/CreateSection'
import Header from '../components/Header'
import BlogApp from '../components/BlogApp'

// Organize the code
// Add routers and useContext

const BlogDashBoard = () => {
  return (
    <div>
      Blog Dashboard
    </div>
  )
}

const EditPost = (props) => {

  console.log(props)

  return (
    <div>
      From Edit Page of {props.match.params.id}
    </div>
  )
}

const NotFoundPage = () => {
  return (
    <div>
      <h1>404! Not Found Page</h1>
      <NavLink to='/'>Home</NavLink>
    </div>
  )
}

const AppRouter = () => {
    return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path='/' component={BlogApp} exact={true} />
          <Route path='/create' component={CreateSection} />
          <Route path='/edit/:id' component={EditPost} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    </BrowserRouter>
    )
}

export default AppRouter
