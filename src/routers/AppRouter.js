import React from 'react'
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import CreatePost from '../components/CreatePost'

import Header from '../components/Header'
import Post from '../components/Post'
import BlogDashBoard from '../components/BlogDashBoard'
import NotFoundPage from '../components/NotFoundPage'

// Edit Page
// Style the site
// Great job

const EditPost = (props) => {

  console.log(props)

  return (
    <div>
      From Edit Page of {props.match.params.id}
    </div>
  )
}

const AppRouter = () => {
    return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path='/' component={BlogDashBoard} exact={true} />
          <Route path='/create' component={CreatePost} />
          <Route path='/edit/:id' component={EditPost} />
          <Route path='/post/:id' component={Post} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    </BrowserRouter>
    )
}

export default AppRouter
