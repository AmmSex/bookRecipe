import React from 'react'

const Instructions = ({steps}) => {
    return(
    <div>
        {steps.map((el, i) => (
            <p key={i}>{el}</p>
        ))}
    </div>
    )
}

export default Instructions;