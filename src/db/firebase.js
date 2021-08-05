import React, {useContext} from 'react'
import firebase from 'firebase'
import {renderPosts} from '../actions/postActions'
import {PostsContext} from '../context/posts-context'

const firebaseConfig = {
    apiKey: "AIzaSyB8fYab6Db8CG4H7dKBsI-Z66bM9GAyV5M",
    authDomain: "blog-5c1cc.firebaseapp.com",
    databaseURL: "https://blog-5c1cc-default-rtdb.firebaseio.com",
    projectId: "blog-5c1cc",
    storageBucket: "blog-5c1cc.appspot.com",
    messagingSenderId: "626240559878",
    appId: "1:626240559878:web:f2eed28bb881046e449c87"
  }

firebase.initializeApp(firebaseConfig)  


const database = firebase.database()

export const saveToDb = (data) => {
    database.ref('posts').set(data).
    then(() => console.log('data saved!!!')).
    catch((e) => console.log('Error', e))
}

//fetching data once
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

export const renderData = (dispatch) => {

    database.ref('posts').on('value', snapshot => {
        if (snapshot.val()) {
            dispatch(renderPosts(snapshot.val()))
        }

        console.log('render data', snapshot.val())
    })
} 

