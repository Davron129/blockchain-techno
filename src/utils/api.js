import axios from 'axios';

class Api {
    constructor() {
        this.headers = { }
    }

    getPosts = (page) => {
        return axios.get(`http://blockchaintexno.uz/api/all/post?pageCount=${page}`)
    }

    getPost = (id) => {
        return axios.get(`http://blockchaintexno.uz/api/post/${id}`)
    }

}

export default Api