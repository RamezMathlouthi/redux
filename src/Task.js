import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteTask, Edit } from './redux/action'

function Task({el}) {
     const disptach=useDispatch()
     const [boolean,setboolean]=useState()
     const [EditTask,setEditTask]=useState()

  return (
    <div className='App0'   >
         <p>Id:{el.id}</p>
           <p>{el.description}</p>
              <input type="checkbox"   checked={el.isDone}  />

                 <button id='close' onClick={()=>disptach(DeleteTask(el.id))}>x</button>

             { boolean ? <> <input type='text' onChange={(e)=>setEditTask(e.target.value)} /> 
                    <button className='Btn' onClick={() => disptach( Edit(el.id, EditTask))}>save</button></>: null}
             <button className='Btn'    onClick={()=>setboolean(!boolean)}  >Edit</button>
    </div>
  )
}

export default Task
