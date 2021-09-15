import { auth } from "../db/firebase"

const loginUser = (uid, email) => ({
    type: 'LOGIN_USER', 
    user: {
        uid,
        email
    }
})

export const startLoginUser = (dispatch, email, password) => {
    return auth.signInWithEmailAndPassword(email, password).then( res => {
        dispatch(loginUser(res.user.uid, email))
    })
}

export const startGetUser = (dispatch) => {
    return auth.onAuthStateChanged( user => {
        dispatch(loginUser(user.uid, user.email))
    })
}

const logoutUser = () => ({
    type: 'LOGOUT_USER'
})

export const startLogoutUser = (dispatch) => {
    return auth.signOut().then(() => {
        dispatch(logoutUser())
    })
}


// export const startGetUser = (dispatch) => {
//     return auth.onAuthStateChanged( user => {
//         dispatch(getUser(user.uid, user.email))
//     })

// }
