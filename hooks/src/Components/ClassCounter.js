import React, {useState} from 'react'

function ClassCounter() {

const [count, setCount] = useState(0);


  return (
    <div>
           <div>
        <button onClick={()=>setCount(count+1)}>count: {count}</button>
      </div>
    </div>
  )
}

export default ClassCounter
