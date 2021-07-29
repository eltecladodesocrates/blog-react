import React from 'react';
import ReactDOM from 'react-dom';
import BlogApp from './components/BlogApp';
import BlogContextApp from './context/posts-context'


// const App = () => {

//   return (
//     <AppRouter />
//   )
// }



ReactDOM.render(
    <BlogContextApp>
            <BlogApp />
    </BlogContextApp>
, document.getElementById('root'));

