import React from 'react'
import uuid from 'uuid'

const Section = ({ title, body }) => {
    return (
        <>
            <h1>{title}</h1>
            {body.map((sec) => <p key={uuid()}>{sec}</p>)}
        </>
    )
}

export default Section
