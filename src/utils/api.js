import axios from 'axios';

class Api {
    constructor() {
        this.headers = { }
    }

    getPosts = () => {
        return axios.get("http://blockchaintexno.uz/api/all/post")
    }

    getPost = (id) => {
        return axios.get(`http://blockchaintexno.uz/api/post/${id}`)
    }

}

export default Api