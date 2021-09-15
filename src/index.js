import React from 'react';
import ReactDOM from 'react-dom';
import BlogApp from './components/BlogApp';
import BlogContextApp from './context/posts-context'
import AuthContextProvider from './context/auth-context';
import './db/firebase'


ReactDOM.render(
    <AuthContextProvider>
        <BlogContextApp>
            <BlogApp />
        </BlogContextApp>
    </AuthContextProvider>

    // <PostsElements />
, document.getElementById('root'));

