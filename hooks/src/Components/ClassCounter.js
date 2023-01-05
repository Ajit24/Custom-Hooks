import React, {useState} from 'react'

function ClassCounter() {
const initialCount = 0;
const [count, setCount] = useState(initialCount);


  return (
    <div>
           <div>
        <button onClick={()=>setCount(count+1)}>count+</button>
        <button onClick={()=>setCount(initialCount)}>RESET</button>
         <div>
         {count}
         </div>
      </div> 
    
    </div>
  )
}

export default ClassCounter
