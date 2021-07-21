import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import uuid from 'uuid'
// import CreatePost from './components/CreatePost'
import CreateSection from './components/CreateSection'

// const post = {
//   img: '',
//   title: '',
//   sections: [{
//     subTitle: '',
//     blocks: []
//   }]
// }

const BlogApp = () => {
  return (
    <CreateSection />
  )
}



ReactDOM.render(<BlogApp />, document.getElementById('root'));


// const post = {
//   id: uuid(),
//   title: '',
//   sections: [{
//     subTitle: '',
//     paragraphs: [

//     ]
//   }]
// }