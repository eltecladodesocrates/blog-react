import React, { useState, useContext, useEffect } from 'react'
import { addPost } from '../actions/postActions'
import {PostsContext} from '../context/posts-context'
import CreateSection from './CreateSection'
import {SectionContext} from '../context/section-context'
import {saveToDb} from '../db/firebase'
import moment from 'moment'

const CreatePost = ({history}) => {

    const {state, dispatch} = useContext(PostsContext)
    const [img, setImg] = useState('')
    const [mainTitle, setMailTitle] = useState('')
    const [topic, setTopic] = useState('html')
    const {sections} = useContext(SectionContext)


    const handleAddPost = () => {
        dispatch(addPost(img, mainTitle, topic, sections))
        setImg('')
        setMailTitle('')
        saveToDb([
            ...state, 
            {
                id: Date.now(),
                createdAt: moment().format('MMMM D YYYY'),
                img,
                title: mainTitle,
                topic,
                sections
            }
        ])
        history.push('/')
    }

    return (
        <div className='main'>

                <img className='postImage' src={img} alt={mainTitle}/>
                {img && <button onClick={() => setImg('')}>x</button>}
                <h2>{mainTitle}</h2>
                {mainTitle && <button onClick={() => setMailTitle('')}>x</button>}
                <input type="text" name='img' value={img} placeholder='Image' onChange={e => setImg(e.target.value)} />
                <select onChange={e => setTopic(e.target.value)}>
                    <option value='html'>HTML</option>
                    <option value='css'>CSS</option>
                    <option value='javascript'>JavaScript</option>
                    <option value='react'>React</option>
                </select>
                <input type="text" name='mainTitle' value={mainTitle} placeholder='Main Title' onChange={e => setMailTitle(e.target.value)} />
                {/* <CreateSection /> */}
                <button onClick={handleAddPost}>Add Post</button>
            
        </div>

    )
}


                // <img className='postImage' src={img} alt={mainTitle}/>
                // {img && <button onClick={() => setImg('')}>x</button>}
                // <h2>{mainTitle}</h2>
                // {mainTitle && <button onClick={() => setMailTitle('')}>x</button>}
                // {!mainTitle && !img &&
                //     <form onSubmit={handleAddHeaderAndImg}>
                //         <input type="text" name='img' placeholder='Image' />
                //         <input type="text" name='mainTitle' placeholder='Main Title' />
                //         <button>Submit</button>
                //     </form>
                // }
                // {/* <CreateSection /> */}
                // <button onClick={handleAddPost}>Add Post</button>

export default CreatePost
