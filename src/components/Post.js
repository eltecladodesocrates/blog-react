import React, {useContext} from 'react'
import {PostsContext} from '../context/posts-context'
import CodeBlock from './CodeBlock'


const Post = (props) => {

    const {state} = useContext(PostsContext)

    return (
        <div>
            {state.map(post => {
              if (props.match.params.id == post.id) {
                return (
                  <div key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    {post.sections.map(section => (
                      <div key={section.id}>
                        <h3>{section.title}</h3>
                        {section.body.map(paragraph => (
                          <div key={paragraph.id}>
                            <p>{paragraph.text}</p>
                            <CodeBlock code={paragraph.code}/>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )
              }
            })}
        </div>
    )
}

export default Post