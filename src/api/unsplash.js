import axios from 'axios'


export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID 1xFiMNdptdXBzFzeOHQRhLZPWE7AGCGi7mP76ONB8MY",
    }
})