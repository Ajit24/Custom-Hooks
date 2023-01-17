import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ApiPost = () => {
 const submitHandle = (event)=>{
event.prevantDefault();
const title = event.target.title.value;
const body = event.target.body.value;
const author = event.target.author.value;
 const data = {title, body, author}

axios.post("https://jsonplaceholder.typicode.com/posts",data)
.then(response =>{
    console.log(response.data)
    event.target.reset();
})
.catch(error =>{
    console.log(error)
})

 }
  return (
    <div>
    <h1>POST API Example </h1>  
<form action="" onSubmit={submitHandle}>
<input type="text" name="title"  placeholder='title'  id='title'/> <br /> <br />
      <input type="text" name="body"  placeholder='body'  id='body' /> <br /> <br />
      <input type="text" name="author"  placeholder='author'  id='author' /> <br /> <br />
      <button type='submit'>submit</button>
</form>
    </div>
  )
}

export default ApiPost
