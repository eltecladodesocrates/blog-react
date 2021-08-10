import React, { useContext, useState } from 'react'

import {SectionContext} from '../context/section-context'
import PostElements from './PostElements'

const CreateSection = () => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [code, setCode] = useState('')
    const [body, setBody] = useState([])

    const {sections, setSections} = useContext(SectionContext)

    const handleAddParagraph = e => {
        e.preventDefault()
        setBody([
            ...body,
            {
                id: Date.now(),
                text,
                code
            }
        ])
        setText('')
        setCode('')
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
            <PostElements element={title} setElement={setTitle} placeHolder='section-title-input'/>
            <PostElements element={text} setElement={setText} placeHolder='section-paragraph-input'/>
            <PostElements element={code} setElement={setCode} placeHolder='section-code-input'/>
            <button className='add-paragraph-btn btn' onClick={handleAddParagraph}>Add Paragraph</button>
            <button className='add-section-btn btn' onClick={handleAddSection}>Secion Section</button>
        </div>
    )
}

export default CreateSection
