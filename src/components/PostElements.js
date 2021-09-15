import React from 'react'

const PostElements = ({element, setElement, placeHolder}) => {

    const [showComponent, setShowComponent] = React.useState(true)

    const editTitle = () => {
        setShowComponent(true)
    }

    const deleteTitle = () => {
        setShowComponent(true)
        setElement('')
    }

    return (
        <div>
            {placeHolder === 'img-input' ? <img src={element} alt={element} /> : <div>{element}</div>}
            {showComponent || element === '' ?
                <textarea
                    className={placeHolder}
                    value={element} 
                    onChange={ e => setElement(e.target.value)} 
                    onKeyPress={(e) => e.key === 'Enter' && setShowComponent(false)} 
                    placeholder={placeHolder}
                ></textarea>  : 
                <div>
                    <button onClick={deleteTitle}>D</button>
                    <button onClick={editTitle}>E</button>
                </div>
            } 
        </div>
    )
}

export default PostElements