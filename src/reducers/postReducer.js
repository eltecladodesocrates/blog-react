import moment from 'moment'

export const sectionReducer = (state, action) => {
    switch (action.type) {
        case 'RENDER_POSTS':
            return action.posts
        case 'ADD_POST':
            return [
                ...state,
                action.post
            ]
        default:
            return state
    }
}

