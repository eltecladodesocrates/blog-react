import React, { useState, useContext, useEffect } from 'react'
import { addPost } from '../actions/postActions'
import {PostsContext} from '../context/posts-context'
import CreateSection from './CreateSection'
import {SectionContext} from '../context/section-context'
import {saveToDb} from '../db/firebase'

const CreatePost = ({history}) => {

    const {state, dispatch} = useContext(PostsContext)
    const [img, setImg] = useState('')
    const [mainTitle, setMailTitle] = useState('')
    const {sections} = useContext(SectionContext)


    const handleAddPost = e => {
        e.preventDefault()
        dispatch(addPost(img, mainTitle, sections))
        setImg('')
        setMailTitle('')
        // setTriggerEffect( current => !current)
        // localStorage.setItem('posts', JSON.stringify(state))
        // saveToDb(state)
        // console.log('state from add post form', state)
        // history.push('/')
    }

    // useEffect(() => {
    //     localStorage.setItem('posts', JSON.stringify(state))
    //     saveToDb(state)
    //     console.log('state is changing (create post page)', [state])
    // }, [triggerEffect])


    return (
        <div>

            <form onSubmit={handleAddPost}>
                <img className='postImage' src={img} alt={mainTitle}/>
                {img && <button onClick={() => setImg('')}>x</button>}
                <h2>{mainTitle}</h2>
                {mainTitle && <button onClick={() => setMailTitle('')}>x</button>}
                <input type="text" name='img' value={img} placeholder='Image' onChange={e => setImg(e.target.value)} />
                <input type="text" name='mainTitle' value={mainTitle} placeholder='Main Title' onChange={e => setMailTitle(e.target.value)} />
                {/* <CreateSection /> */}
                <button>Add Post</button>
            </form>


            
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
