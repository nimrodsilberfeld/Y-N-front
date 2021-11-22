import React, { useState } from 'react'

export default function Option({ option, index,setOptionSelect }) {
    const [vote,setVote]=useState(option.vote)
    return (
        <div className="check_option" key={index}>
            <input type="checkbox" onClick={() => {
                setOptionSelect(index)
            }} />
            <p>{option.option}</p>
            <p>({vote} votes)</p>
        </div>
    )
}
