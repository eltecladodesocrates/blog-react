import React from 'react'
import SectionContextApp from '../context/section-context'

import AppRouter from '../routers/AppRouter'
const BlogApp = () => {

    return (
        <SectionContextApp>
            <AppRouter />
        </SectionContextApp>
    )
}

export default BlogApp