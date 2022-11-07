import axios from 'axios'

const API_URL = 'https://pinterestserver.herokuapp.com/api/users/'

// Register User
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// login User
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// getProfile
const getProfile = async (userData) => {
    const response = await axios.get((API_URL + 'userId', userData))
    
    return response.data
  };


// Logout User
const logout = ()=>{
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
    getProfile,
}

export default authService