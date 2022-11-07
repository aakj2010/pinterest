import axios from 'axios'


export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID 1xFiMNdptdXBzFzeOHQRhLZPWE7AGCGi7mP76ONB8MY",
        // Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`,
    }
})


const instance = axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID 1xFiMNdptdXBzFzeOHQRhLZPWE7AGCGi7mP76ONB8MY",
    }
})

export const search = async(params) => {
    return await instance.get(`/search/photos/`, { params });
}

export const random = async(params) => {
    return await instance.get(`/photos/random/`, { params });
}