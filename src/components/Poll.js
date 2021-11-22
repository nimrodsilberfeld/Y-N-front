import React, { useState } from 'react'
import { submitVote } from '../fetch/fetch'
import Option from './Option'

export default function Poll({ poll, handleSubmit }) {
    console.log(poll)
    const [optionSelect, setOptionSelect] = useState("")
    const [submited, setSubmited] = useState(false)


    return (
        <div className="poll">
            <h3>{poll.title}</h3>
            {poll.options.map((option, index) => (
                <Option
                    key={index}
                    setOptionSelect={setOptionSelect}
                    option={option}
                    index={index}
                />
            ))}
            <button onClick={() => {
                handleSubmit(optionSelect, poll._id)
            }} className="submitBtn">Submit</button>
        </div>
    )
}
