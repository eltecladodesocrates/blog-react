import React, { useState, useContext, useEffect } from 'react'
import { addPost } from '../actions/postActions'
import {PostsContext} from '../context/posts-context'
import CreateSection from './CreateSection'
import {SectionContext} from '../context/section-context'

const CreatePost = () => {

    const {state, dispatch} = useContext(PostsContext)
    const [img, setImg] = useState('')
    const [mainTitle, setMailTitle] = useState('')
    const {sections} = useContext(SectionContext)

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

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(state))
        console.log('state from create post')
    }, [state])


    return (
        <div>
            <img className='postImage' src={img} alt={mainTitle}/>
            {img && <button onClick={() => setImg('')}>x</button>}
            <h2>{mainTitle}</h2>
            {mainTitle && <button onClick={() => setMailTitle('')}>x</button>}
            {!mainTitle && !img &&
                <form onSubmit={handleAddHeaderAndImg}>
                    <input type="text" name='img' placeholder='Image' />
                    <input type="text" name='mainTitle' placeholder='Main Title' />
                    <button>Submit</button>
                </form>
            }
            <CreateSection />

            <button onClick={handleAddPost}>Add Post</button>
        </div>

    )
}

export default CreatePost
