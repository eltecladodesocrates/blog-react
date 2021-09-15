import React, { useState, useContext } from 'react'
import {PostsContext} from '../context/posts-context'
import CreateSection from './CreateSection'
import {SectionContext} from '../context/section-context'
import PostElements from './PostElements'
import { startAddPost } from '../actions/postActions'



const CreatePost = ({history}) => {

    const {state, dispatch} = useContext(PostsContext)
    const [img, setImg] = useState('')
    const [mainTitle, setMailTitle] = useState('')
    const [topic, setTopic] = useState('html')
    const {sections} = useContext(SectionContext)


    const handleAddPost = () => {
        // dispatch(addPost(img, mainTitle, topic, sections))
        startAddPost(dispatch, {img, mainTitle, topic, sections})
        setImg('')
        setMailTitle('')
        // saveToDb([
        //     ...state, 
        //     {
        //         id: Date.now(),
        //         createdAt: moment().format('MMMM D YYYY'),
        //         img,
        //         title: mainTitle,
        //         topic,
        //         sections
        //     }
        // ])
        history.push('/')
    }

    return (
        <div className='main post-form'>
                <h2 className='post-section-title'>Create a Post</h2>
                <PostElements element={img} setElement={setImg} placeHolder='img-input'/>
                <PostElements element={mainTitle} setElement={setMailTitle} placeHolder='title-input'/>
                <select onChange={e => setTopic(e.target.value)}>
                    <option value='html'>HTML</option>
                    <option value='css'>CSS</option>
                    <option value='javascript'>JavaScript</option>
                    <option value='react'>React</option>
                </select>
                <CreateSection />
                <button onClick={handleAddPost}>Add Post</button>
        </div>

    )
}

export default CreatePost
