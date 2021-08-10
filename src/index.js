import React from 'react';
import ReactDOM from 'react-dom';
import BlogApp from './components/BlogApp';
import BlogContextApp from './context/posts-context'
import './db/firebase'





const PostsElements = () => {

    // these are going to be the props, got go
    const [element, setElement] = React.useState('')
    // this one stays
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
            <h1>Learning Input key down</h1>
            <h2>{element}</h2>
            {!showComponent && <button onClick={editTitle}>E</button>}
            {!showComponent && <button onClick={deleteTitle}>D</button>}
            {showComponent && <input value={element} onChange={ e => setElement(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && setShowComponent(false)} />}
            
        </div>
    )
}


ReactDOM.render(
    <BlogContextApp>
            <BlogApp />
    </BlogContextApp>
    // <PostsElements />
, document.getElementById('root'));

