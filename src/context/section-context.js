import React, {useState} from 'react'

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