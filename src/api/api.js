import axios from 'axios';

export const GET = (url, setState)=>{
    axios.get(url)
    .then(res=>setState(res.data))
}