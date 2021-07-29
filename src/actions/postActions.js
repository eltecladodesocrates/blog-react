export const renderPosts = (posts) => ({
    type: 'RENDER_POSTS',
    posts
})

export const addPost = (img, mainTitle, sections) => ({
    type: 'ADD_POST',
    img,
    mainTitle,
    sections
})

