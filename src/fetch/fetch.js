import axios from 'axios'
const url = 'http://localhost:5000'


export const getPolls = async (page) => {
    console.log("get polls")
    try {
        const response = await axios.get(`${url}/api/polls?page=${page}`)
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err)
        throw new Error("could not fetch tasks")
    }
}

export const submitVote = async (index, id) => {
    // headers = { 'poll-api-key': "randomapikey" }
    try {
        await axios.patch(`${url}/api/poll/${id}/vote/${index}`, {
            headers: {
                'poll-api-key': "randomapikey",
            }
        })
    } catch (err) {
        throw new Error("error while submit")
    }
}