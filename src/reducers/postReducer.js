import moment from 'moment'

export const sectionReducer = (state, action) => {
    switch (action.type) {
        case 'RENDER_POSTS':
            return action.posts
        case 'ADD_POST':
            return [
                ...state,
                {
                    id: Date.now(),
                    createdAt: moment().format('MMMM D YYYY'),
                    img: action.img,
                    title: action.mainTitle,
                    topic: action.topic,
                    sections: action.sections
                }
            ]
        default:
            return state
    }
}

