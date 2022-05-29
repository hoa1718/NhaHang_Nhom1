import axios from 'axios';
export function getLastID(){
    axios.get('http://localhost:4000/ThucDon/LastID')
    .then(res => {
        return Number(res.data.result.Length);
    })
    .catch(err =>{
     re
    })
}
