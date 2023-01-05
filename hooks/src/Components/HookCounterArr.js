import React, {useState} from 'react'

const HookCounterArr = () => {
    const [items, setItems] = useState([]);

const addItem = ()=>{
setItems([...items, {
id: items.length,
value: Math.floor(Math.random()* 10) + 1
}])
console.log(items);
}

  return (
    <div>
        <h2> useState Hooks with Array : </h2> <hr />
      <button onClick={addItem}>Add-Count-No.</button>    <br /> <br />
     <ul>
        {items.map(item=>(
            <li key={item.id}>{item.value}</li>
        ))}
     </ul>
    </div>
  )
}

export default HookCounterArr
