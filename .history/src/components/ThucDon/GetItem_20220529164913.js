import axios from 'axios';
    export f getLastID=(lastID)=>{
            axios.get('http://localhost:4000/ThucDon/LastID')
            .then(res => {
             lastID=Number(res.data.result.Length);
             console.log(lastID);
            })
            .catch(err =>{
             console.log(err);;
            })
}