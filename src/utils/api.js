import axios from 'axios';

class Api {
    constructor() {
        this.headers = { }
    }

    getPosts = (page, title) => {
        return title 
            ? axios.get(`http://blockchaintexno.uz/api/all/post?pageCount=${page}&title=${title}`)
            : axios.get(`http://blockchaintexno.uz/api/all/post?pageCount=${page}`)
    }

    getPost = (id) => {
        return axios.get(`http://blockchaintexno.uz/api/post/${id}`)
    }

    sendComment = (name, orgName, comment) => {
        return axios.post("http://blockchaintexno.uz/api/send/email", 
            {
                name: name,
                orgName: orgName,
                desc: comment
            }
        )
    }

    getHeaderImage = () => {
        return axios.get("http://blockchaintexno.uz/api/all/head");
    }

}

export default Api