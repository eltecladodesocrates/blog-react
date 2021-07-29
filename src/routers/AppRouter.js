import React, {useContext, useEffect} from 'react'
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom'
import CreatePost from '../components/CreatePost'

import Header from '../components/Header'
import CodeBlock from '../components/CodeBlock'
import {PostsContext} from '../context/posts-context'
import {renderPosts} from '../actions/postActions'

// Local Storage
// Edit Page
// Style the site
// Great job


const BlogDashBoard = () => {

  const {state, dispatch} = useContext(PostsContext)

  useEffect(() => {
    // fix this
    // You just need to render the posts
    // they are already in localstorage
    const postsData = JSON.parse(localStorage.getItem('posts'))
    if (postsData) {
      console.log('state from localstorage: ', postsData)
      dispatch(renderPosts(postsData))
      // I thin the problem is in dispatch
    }
  }, [])

  return (
    <div>
      {state && state.map(post => (
        <Link key={post.id} to={`post/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
      ))}

    </div>
  )
}

const Post = () => {

    const {state} = useContext(PostsContext)

    return (
        <div>
            {state.map(post => (
              <div key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                {post.sections.map(section => (
                  <div key={section.id}>
                    <h3>{section.title}</h3>
                    {section.body.map(paragraph => (
                      <div key={paragraph.id}>
                        <p>{paragraph.text}</p>
                        <CodeBlock code={paragraph.code}/>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
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
