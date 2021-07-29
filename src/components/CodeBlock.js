import React, {useContext} from 'react'
import {CopyBlock, dracula } from 'react-code-blocks'
import {SectionContext} from '../context/section-context'

const CodeBlock = ({code}) => {

    const {sections} = useContext(SectionContext)
    console.log(sections)
    return (
        <>
            <CopyBlock 
                text={code}
                language={'javascript'}
                theme={dracula}
            />
            
        </>
    )
}

export default CodeBlock