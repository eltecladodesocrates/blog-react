import React, { useState } from 'react'
import CreatePost from './CreatePost'

// Set up the router before you add any extra component, if not after that is going to be tough
// Add a new component called Header, in which you will define main title and img
// Take advantage of the useContext hook, if not this is going to be a fucked up mess
// Start creating the DB for the project (check about auth and google analitics)
// Use firebase as the backend, you are not ready for building an API from scratch, we need this blog now
// You are doing a great job 

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

export default CreateSection
