import React, {useContext, useEffect} from "react"
import {PostsContext} from '../context/posts-context'
import {renderPosts} from '../actions/postActions'
import Posts from './Posts'

const BlogDashBoard = () => {

  const {dispatch} = useContext(PostsContext)

  useEffect(() => {
    const postsData = JSON.parse(localStorage.getItem('posts'))
    if (postsData) {
      dispatch(renderPosts(postsData))
    }
  }, [])

  return (
    <Posts />
  )
}

export default BlogDashBoard