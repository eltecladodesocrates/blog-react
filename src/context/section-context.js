import React, {useReducer, useState} from 'react'
import CreatePost from '../components/CreatePost'
import CreateSection from '../components/CreateSection'


export const SectionContext = React.createContext()

const SectionContextApp = ({children}) => {


    const [sections, setSections] = useState([])


    return (
        <SectionContext.Provider value={{sections, setSections}}>
            {children}
        </SectionContext.Provider>
    )
}

export default SectionContextApp