import React, {useState, useEffect} from 'react'

const UseEffectOne = () => {
    const [count, setCount] = useState(0);
    const [name , setName] = useState('');

useEffect(()=>{
    console.log('useEffect - updating document title')
    document.title = `you clicked ${count} times`
}, [count])

  return (
    <div>
      <h3>useEffect Hook in React.js</h3>  <hr />

      <input type="text" value={name} id="" onChange={ e => setName(e.target.value)} />

      <button onClick={()=>setCount(count+1)}>count: {count}</button>
      

    </div>
  )
}

export default UseEffectOne
