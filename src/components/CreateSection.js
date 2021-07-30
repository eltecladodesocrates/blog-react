import React, { useContext, useState } from 'react'
import {CopyBlock, dracula} from 'react-code-blocks'
import CreatePost from './CreatePost'

import {SectionContext} from '../context/section-context'

// Start creating the DB for the project (check about auth and google analitics)
// Use firebase as the backend, you are not ready for building an API from scratch, we need this blog now
// You are doing a great job 

const CreateSection = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState([])

    const {sections, setSections} = useContext(SectionContext)


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
                text: e.target.paragraph.value,
                code: e.target.code.value
            }
        ])
        e.target.paragraph.value = ''
        e.target.code.value = ''
    }

    const handleRemoveParagraph = id => {
        const updatedBody = body.filter(paragraph => {
            if (paragraph.id === id) {
                paragraph.text = ''
            }
            return paragraph
        })
        setBody(updatedBody)
    }

    const handleRemoveCode = id => {
        const updatedBody = body.filter(paragraph => {
            if (paragraph.id === id) {
                paragraph.code = ''
            }
            return paragraph
        })
        setBody(updatedBody)
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
                    {paragraph.text && <button onClick={() => handleRemoveParagraph(paragraph.id)}>x</button>}
                    {
                        paragraph.code && 
                        <>
                            <CopyBlock 
                                text={paragraph.code}
                                language={'javascript'}
                                theme={dracula}
                            />
                            <button onClick={() => handleRemoveCode(paragraph.id)}>x</button>
                        </>
                    }

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
                <textarea name='code'></textarea>
                <button>Add Paragraph</button>
            </form>
            <form onSubmit={handleAddSection}>
                <button>Submit Section</button>
            </form>


        </div>
    )
}

export default CreateSection
