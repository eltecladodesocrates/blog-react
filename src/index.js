import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import uuid from 'uuid'
// import CreatePost from './components/CreatePost'
import CreateSection from './components/CreateSection'
import BlogApp from './components/BlogApp';


// const App = () => {

//   return (
//     <AppRouter />
//   )
// }



ReactDOM.render(<BlogApp />, document.getElementById('root'));

