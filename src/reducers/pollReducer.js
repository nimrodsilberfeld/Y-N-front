import { SET_LIST } from "../action/pollAction"

export const initialState = []

const pollReducer = (poll, action) => {
    switch (action.type) {
        case SET_LIST:
            console.log("action",action.polls)
            return action.polls

        default:
            return poll
    }
}

export default pollReducer