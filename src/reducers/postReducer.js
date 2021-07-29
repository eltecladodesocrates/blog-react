export const sectionReducer = (state, action) => {
    switch (action.type) {
        case 'RENDER_POSTS':
            return action.posts
        case 'ADD_POST':
            return [
                ...state,
                {
                    id: Date.now(),
                    img: action.img,
                    title: action.mainTitle,
                    sections: action.sections
                }
            ]
        default:
            return state
    }
}