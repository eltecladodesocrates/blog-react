export const userReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER': 
            return [
                ...state,
                {
                    user: action.userName,
                    password: action.userPassword,
                    createdAt: Date.now(),
                    loged: true
                }
            ]
        case 'LOGIN_USER':
            return state
        case 'LOGOUT_USER':
            return state
        default:
            return state
    }
}