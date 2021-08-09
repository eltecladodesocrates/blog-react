import React, {useContext} from 'react'
import {PostsContext} from '../context/posts-context'
import CodeBlock from './CodeBlock'


const Post = (props) => {

    const {state} = useContext(PostsContext)
    console.log('from POST', state)
    return (
        <div>
            {state.map(post => {
              if (props.match.params.id == post.id) {
                return (
                  <div key={post.id}>
                    <div className='post-header-container'>

                      <div className='post-img' style={
                        {
                          backgroundImage: `url(${post.img})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat'
                        }}>
                          <h2 className='post-title'>{post.title}</h2>
                      </div>
                    </div>
                    <div className='container post-container'>
                      {post.sections.map(section => (
                        <div className='post-section' key={section.id}>
                          <h3 className='post-section-title'>{section.title}</h3>
                          {section.body.map(paragraph => (
                            <div key={paragraph.id}>
                              <p className='post-section-paragraph'>{paragraph.text}</p>
                              {paragraph.code && <div className='post-section-code'><CodeBlock code={paragraph.code}/></div>}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
            })}
        </div>
    )
}

export default Post