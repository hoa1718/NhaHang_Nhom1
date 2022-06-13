import axios from 'axios';

const getlastID = (lastID) => {
    axios.get('http://localhost:4000/ThucDon/LastID')
    .then(res => {
     lastID=Number(res.data.result.Length);
    })
    .catch(err =>{
     console.log(err);;
    })
}

export module