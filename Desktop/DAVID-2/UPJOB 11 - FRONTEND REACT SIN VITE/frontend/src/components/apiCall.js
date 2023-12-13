import axios from 'axios';
export const getAPIInfo = async (body) => {

    return await axios.post(`https://dummyjson.com/auth/login`, body)
}