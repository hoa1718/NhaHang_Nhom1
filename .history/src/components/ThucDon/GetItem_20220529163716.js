// const getlastID = () =>  
import axios from 'axios';
module.exports(
    getlastID = (lastID) => {
        axios.get('http://localhost:4000/ThucDon/LastID')
        .then(res => {
         lastID=Number(res.data.result.Length);
        })
        .catch(err =>{
         console.log(err);;
        })
    }
)