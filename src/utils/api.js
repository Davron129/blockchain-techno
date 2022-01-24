import axios from 'axios';

class Api {
    constructor() {
        this.headers = { }
    }

    getPosts = (page, title) => {
        return title 
            ? axios.get(`https://blockchaintexno.uz/api/all/post?pageCount=${page}&title=${title}`)
            : axios.get(`https://blockchaintexno.uz/api/all/post?pageCount=${page}`)
    }

    getPost = (id) => {
        return axios.get(`https://blockchaintexno.uz/api/post/${id}`)
    }

    sendComment = (name, orgName, comment, contact) => {
        return axios.post("https://blockchaintexno.uz/api/send/email", 
            {
                name: name,
                orgName: orgName,
                desc: comment,
                contact: contact
            }
        )
    }

    getHeaderImage = () => {
        return axios.get("https://blockchaintexno.uz/api/all/head");
    }

}

export default Api