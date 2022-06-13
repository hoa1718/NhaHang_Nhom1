import axios from 'axios';
    export const lastID = () =>{
            axios.get('http://localhost:4000/ThucDon/LastID')
            .then(res => {
             return Number(res.data.result.Length);
            })
            .catch(err =>{
             console.log(err);;
            })
}