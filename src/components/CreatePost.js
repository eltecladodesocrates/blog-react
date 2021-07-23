import React, { useState, useContext, useReducer } from 'react'
import { sectionReducer } from '../reducers/postReducer'
import { addPost } from '../actions/postActions'
import Post from './Post'
import PostsContext from '../context/posts-context'

// Work on this, dispatch is not working keep up with the tutorial

const CreatePost = ({ sections }) => {

    const {dispatch} = useContext(PostsContext)
    const [img, setImg] = useState('')
    const [mainTitle, setMailTitle] = useState('')
    // const [state, dispatch] = useReducer(sectionReducer, [])

    const handleAddHeaderAndImg = e => {
        e.preventDefault()
        setImg(e.target.img.value)
        setMailTitle(e.target.mainTitle.value)
    }

    const handleAddPost = () => {
        dispatch(addPost(img, mainTitle, sections))
        setImg('')
        setMailTitle('')
    }

    return (
        <div>
            {!mainTitle && !img &&
                <form onSubmit={handleAddHeaderAndImg}>
                    <input type="text" name='img' placeholder='Image' />
                    <input type="text" name='mainTitle' placeholder='Main Title' />
                    <button>Submit</button>
                </form>
            }
            <button onClick={handleAddPost}>Add Post</button>
        </div>

    )
}

export default CreatePost
