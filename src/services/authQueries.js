import axios from 'axios'

const register = async ( data ) => {
    try {
        const response = await axios.post( 'http://localhost:4000/api/auth/register', data )
        return response.data 
    } catch (error) {
        return error.response.data
    }
}

export default {
    register
}