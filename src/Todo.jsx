1
import React, { useState } from 'react'

function Todo() {
    const [data, setData] = useState([]);
    const [showData, setShow] = useState("")

    const handledad = ()=>{
        setData([...data, showData]);
        setShow("")
        console.log(showData)
    }
    const handleRemove =(index)=>{
        const filterRemove = data.filter((item , i)=> i !== index)
        setData(filterRemove)
    }

  return (

    <>
    <h3>Tod List</h3>
    <input onChange={(e) => setShow(e.target.value)} 
    value={showData}
    type="text" placeholder='Add Item' className=' border px-2 ml-2' />
    <button onClick={handledad}> Add</button>


<ul>
{data.map((item, index)=>{
    return (
         <li key={index}>
                {item}
              <button onClick={()=>handleRemove(index)}>Delete</button>
              </li>
    )
})}
</ul>
    </>
    
  )
}

export default Todo