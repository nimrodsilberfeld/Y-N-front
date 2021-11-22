import React, { createContext, useReducer } from 'react'
import pollReducer, { initialState } from '../reducers/pollReducer'

export const PollContext = createContext()

const PollContextProvider = (props) => {
    const [polls, dispatchPolls] = useReducer(pollReducer, initialState)
    return (
        <PollContext.Provider value={{ polls, dispatchPolls }} >
            {props.children}
        </PollContext.Provider>
    )
}

export default PollContextProvider