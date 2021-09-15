import { database } from "../db/firebase"
import moment from "moment"

export const renderPosts = (posts) => ({
    type: 'RENDER_POSTS',
    posts
})

export const startRenderPosts = (dispatch) => {
    database.ref('posts').on('value', snapshot => {
        let posts = []
        snapshot.forEach(child => {
            posts.push({
                id: child.key,
                ...child.val()
            })
        })
        dispatch(renderPosts(posts))
    })
}

export const addPost = (img, mainTitle, topic, sections) => ({
    type: 'ADD_POST',
    post: {
        createdAt: moment().format('MMMM D YYYY'),
        img,
        mainTitle,
        topic,
        sections
    }
})

export const startAddPost = (dispatch, post) => {
    database.ref('posts').push(post).then(() => {
        dispatch(addPost(post))
    })
}

// export const renderData = (dispatch) => {

//     database.ref('posts').on('value', snapshot => {
//         if (snapshot.val()) {
//             dispatch(renderPosts(snapshot.val()))
//         }

//         console.log('render data', snapshot.val())
//     })
// } 

// export const saveToDb = (data) => {
//     database.ref('posts').set(data).
//     then(() => console.log('data saved!!!')).
//     catch((e) => console.log('Error', e))
// }

