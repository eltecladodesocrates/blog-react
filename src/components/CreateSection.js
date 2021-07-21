import React, { useState, useReducer } from 'react'

const addPost = (img, mainTitle, title, body) => ({
    type: 'ADD_POST',
    img,
    mainTitle,
    title,
    body
})

const sectionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                {
                    id: Date.now(),
                    img: action.img,
                    title: action.mainTitle,
                    sections: [{
                        id: action.title,
                        title: action.title,
                        body: action.body
                    }]
                }
            ]
        default:
            return state
    }
}

// It is working quite nice but in this component you just have to submit sections, do not run and submit 
// everything because you will end up with a post with just one section
// Think about it

const CreateSection = () => {
    const [img, setImg] = useState('')
    const [mainTitle, setMailTitle] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState([])
    const [state, dispatch] = useReducer(sectionReducer, [])

    const handleAddHeaderAndImg = e => {
        e.preventDefault()
        setImg(e.target.img.value)
        setMailTitle(e.target.mainTitle.value)
    }

    const handleAddTitle = e => {
        e.preventDefault()
        setTitle(e.target.title.value)
        e.target.title.value = ''
    }

    const handleAddParagraph = e => {
        e.preventDefault()
        setBody([
            ...body,
            e.target.paragraph.value
        ])
        e.target.paragraph.value = ''
    }

    const handleAddSection = (e) => {
        e.preventDefault()
        dispatch(addPost(img, mainTitle, title, body))
        setTitle('')
        setBody([])
        setImg('')
        setMailTitle('')
    }

    console.log('state', state)

    return (
        <div>

            {state.map(post => {
                post.sections.map(section => console.log(section))
            })}
            {!mainTitle && !img &&
                <form onSubmit={handleAddHeaderAndImg}>
                    <input type="text" name='img' placeholder='Image' />
                    <input type="text" name='mainTitle' placeholder='Main Title' />
                    <button>Submit</button>
                </form>
            }
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
        </div>
    )
}

export default CreateSection
