import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from './redux/action'


function Addtask() {
  const [desc,setDesc]= useState('')
  const [isdone,setIsdone]=useState(false)
  const dispatch=useDispatch()
  return (
    <div className='App1'>
        <label>description:</label>
        <input type='text' onChange={(e)=>setDesc(e.target.value)}/>

        <label for='todo' data-content='Get out of bed'>isdone:</label>
        <input type='checkbox' id='todo' name='todo' value='todo'  onChange={(e)=>setIsdone(!isdone)}/>

        <button className='glow-on-hover' type='button' onClick={()=>dispatch(addtask(desc,isdone))}>AddTask</button>

    
      
    </div>
  )
}

export default Addtask
