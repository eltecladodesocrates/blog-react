import React, { useState, useReducer } from 'react'
import { addPost } from '../actions/postActions'
import { sectionReducer } from '../reducers/postReducer'

// It is working quite nice but in this component you just have to submit sections, do not run and submit 
// everything because you will end up with a post with just one section
// Think about it

const CreateSection = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState([])
    const [sections, setSections] = useState([])



    const handleAddTitle = e => {
        e.preventDefault()
        setTitle(e.target.title.value)
        e.target.title.value = ''
    }

    const handleAddParagraph = e => {
        e.preventDefault()
        setBody([
            ...body,
            {
                id: Date.now(),
                text: e.target.paragraph.value
            }
        ])
        e.target.paragraph.value = ''
    }

    const handleRemoveParagraph = id => {
        const updatedBody = body.filter(paragraph => paragraph.id !== id)
        setBody(updatedBody)
        console.log(updatedBody)
    }

    const handleAddSection = (e) => {
        e.preventDefault()

        setSections([
            ...sections,
            {
                id: Date.now(),
                title,
                body
            }
        ])
        setTitle('')
        setBody([])
    }

    return (
        <div>
            <div>
                <h2>{title}</h2>
                {title && <button onClick={() => setTitle('')}>x</button>}
            </div>
            {body.map((paragraph) => (
                <div key={paragraph.id}>
                    <p>{paragraph.text}</p>
                    <button onClick={() => handleRemoveParagraph(paragraph.id)}>x</button>
                </div>
            ))}
            {!title &&
                <form onSubmit={handleAddTitle}>
                    <input type="text" placeholder='Title' name='title' />
                    <button>Add Title</button>
                </form>
            }
            <form onSubmit={handleAddParagraph}>
                <textarea name="paragraph"></textarea>
                <button>Add Paragraph</button>
            </form>
            <form onSubmit={handleAddSection}>
                <button>Submit Section</button>
            </form>
            <CreatePost
                sections={sections}
            />

        </div>
    )
}

const CreatePost = ({ sections }) => {

    const [img, setImg] = useState('')
    const [mainTitle, setMailTitle] = useState('')
    const [state, dispatch] = useReducer(sectionReducer, [])

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
            <Post
                post={state}
            />
        </div>

    )
}

const Post = ({ post }) => {
    return (
        <div>
            {console.log('Post', post)}
        </div>
    )
}

export default CreateSection
