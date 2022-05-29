import axios from 'axios';
function getLastID(){
    axios.get('http://localhost:4000/ThucDon/LastID')
    .then(res => {
        console.log(Number(res.data.result.Length));
     return Number(res.data.result.Length);
    })
    .catch(err =>{
     console.log(err);;
    })
}
module.export ({getLastID}