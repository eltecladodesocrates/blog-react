import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CreatePost from '../components/CreatePost'

import Header from '../components/Header'
import Post from '../components/Post'
import BlogDashBoard from '../components/BlogDashBoard'
import NotFoundPage from '../components/NotFoundPage'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Footer from '../components/Footer'

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
          <Route path='/createletat' component={CreatePost} />
          <Route path='/edit/:id' component={EditPost} />
          <Route path='/post/:id' component={Post} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
    )
}

export default AppRouter
