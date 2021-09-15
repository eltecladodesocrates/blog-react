import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {PostsContext} from '../context/posts-context'

const Posts = () => {

    const {state} = useContext(PostsContext)

    return (
        <div className='container posts-container-grid'>
            {/* {state && state.map(post => {
                console.log('post id', post.id)
            })} */}
            {state && state.map(post => (

                <div key={post.id} className='post-sumary'>
                    <Link to={`post/${post.id}`}>
                        <div className='post-sumary-img' style={
                            {
                            backgroundImage: `url(${post.img})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                            }}>
                        </div>
                        <h2 className='post-sumary-title'>{post.mainTitle}</h2>
                    </Link>
                    <p>{post.createdAt}</p>
                </div>
            ))}
        </div>
    )
}

export default Posts

// {console.log(post)}
// {state && state.map(post => (            ))}