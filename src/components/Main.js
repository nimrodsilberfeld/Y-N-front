import React, { useContext, useEffect, useState } from 'react'
import { setListAction } from '../action/pollAction'
import { PollContext } from '../context/pollsContext'
import { getPolls, submitVote } from '../fetch/fetch'
import Poll from './Poll'

export default function Main() {
    const { polls, dispatchPolls } = useContext(PollContext)
    console.log(polls)
    const [page, setPage] = useState(1)
    const [countPolls, setCount] = useState(0)
    const [submit, setSubmit] = useState(false)
    useEffect(() => {
        getPolls(page)
            .then((poll) => {
                console.log(poll)
                setCount(poll.number)
                dispatchPolls(setListAction(poll.polls))
            }).catch((err) => {
                console.log(err.message)
                alert(err.message)
            })
    }, [page, submit])

    const handleSubmit = async (option, id) => {
        submitVote(option, id)
            .then((poll) => {
                console.log(poll)
                setSubmit(!submit)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="main">
            <h1 className="header">Poll Application</h1>
            {polls.map(poll => (
                <Poll key={poll._id} poll={poll} handleSubmit={handleSubmit} />
            ))}
            <div className="page_btn">
                <button disabled={page === 0 ? true : false} onClick={() => {
                    setPage(page > 1 ? page - 1 : 1)
                }}>Prev</button>
                {page}
                <button onClick={() => {
                    setPage(page + 1)

                }
                }
                    disabled={countPolls < page * 3}
                >Next</button>
            </div>
        </div>
    )
}
