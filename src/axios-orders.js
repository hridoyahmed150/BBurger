import axios from 'axios';

const instance=axios.create({
    baseURL:'https://bburger-49076.firebaseio.com/'
})

export default instance;