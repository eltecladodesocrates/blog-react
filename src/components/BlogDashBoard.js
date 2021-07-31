import React, {useContext, useEffect} from "react"
import {PostsContext} from '../context/posts-context'
import {renderPosts} from '../actions/postActions'
import Posts from './Posts'
import {renderData} from '../db/firebase'



const BlogDashBoard = () => {

  const {dispatch} = useContext(PostsContext)
//   const data = await renderData()
    // Fix useeffect to render data from DB
    // I thin async/await would work but
    // if we have useEffect it is kind of redundant
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