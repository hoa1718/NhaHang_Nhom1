import axios from 'axios';
    export const astID = (lastID) =>{
            axios.get('http://localhost:4000/ThucDon/LastID')
            .then(res => {
             lastID=Number(res.data.result.Length);
            })
            .catch(err =>{
             console.log(err);;
            })
}