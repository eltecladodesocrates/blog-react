import firebase from 'firebase'

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
    database.ref().set(data).
    then(() => console.log('data saved!!!')).
    catch((e) => console.log('Error', e))
}
