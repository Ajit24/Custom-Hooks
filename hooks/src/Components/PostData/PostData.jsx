import React, {useState} from 'react'
import axios, { Axios } from 'axios';


const PostData = () => {

    // axios.post('https://fakestoreapi.com/users', {
    //     name: 'John',
    //     // age: 30
    // })
    // .then(function (response) {
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
    const url = ""
    const [data, setData] = useState({
        name:"",
        date:"",
        iduser:""
    })

function submit(e){
e.prevantDefault()
Axios.post(url,{
    name:data.name,
    date:data.date,
    iduser:data.iduser
})
.then(res=>{
    console.log(res.data);
})
}

const handle = (e)=>{
    const newData = {...data}
    newData[e.target.id] = e.target.value;
    setData(newData)
    console.log(newData);
// alert("form-submit")
}
  return (
    <div>
      <h2>post data in api....</h2>
     <form  onSubmit={(e)=>submit(e)} style={{border:'1px solid red'}}>
        <input onChange={(e)=>handle(e)} id='name' value={data.name}  type="text" placeholder='name' /> <br /> <br />
        <input onChange={(e)=>handle(e)} id='date' value={data.date}  type="date" placeholder='choose date' /> <br /> <br />
        <input onChange={(e)=>handle(e)} id='iduser' value={data.iduser}  type="number" placeholder='id user' /> <br />
        <button style={{background:'blue', color:'white'}}>SUBMIT</button>

     </form>

    </div>
  )
}

export default PostData
