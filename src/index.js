import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid'

class BlogApp extends React.Component {

  state = {
    posts: []
  }

  handleCreatePost = (post) => {
    this.setState((prevState) => ({ posts: prevState.posts.concat(post) }))
  }

  render() {
    return (
      <div>
        <Header />
        <Posts
          posts={this.state.posts}
          handleCreatePost={this.handleCreatePost}
        />
      </div>
    )
  }
}

const Header = () => {
  return (
    <div>
      <h1>Blog App</h1>
    </div>
  )
}

const Posts = (props) => (
  <div>
    {props.posts.map((post) => {
      return <Post
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    })}
    <CreatePost
      handleCreatePost={props.handleCreatePost}
    />
  </div>
)

const Post = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

const CreatePost = (props) => {
  const handleCreatePost = (e) => {
    e.preventDefault()
    const post = {
      id: uuid(),
      title: e.target.title.value,
      body: e.target.body.value
    }
    props.handleCreatePost(post)

  }
  return (
    <form onSubmit={handleCreatePost}>
      <input type="text" name="title" />
      <textarea type="text" name="body" />
      <button>Post</button>
    </form>
  )
}

ReactDOM.render(<BlogApp />, document.getElementById('root'));

