import React, { useEffect, useRef, useState } from 'react'
import { useTodo } from '../context/TodoContext'
import { MdEdit } from "react-icons/md";
import { MdCancel } from "react-icons/md";


const TodoListItem = ({item,dispatch}) => {
        let inputRef = useRef(null)
        const[disableInput,setDisableInput]=useState(true)

    

        useEffect(()=>{
            if(!disableInput && inputRef.current){
                inputRef.current.focus()
            }

        },[disableInput])

  return (
    <div key={item.id} className='bg-green-500 py-2 rounded-lg max-w-sm w-full flex justify-between px-4'>
    <div className='flex items-center gap-1 flex-4/5'>
    <input type="checkbox" name="checkbox" id="" onChange={()=>{
     console.log(item.checked)
     !item.checked ? dispatch({type:'CHECK_ITEM',payload:item.id}) : dispatch({type:'UNCHECK_ITEM',payload:item.id})
    }} checked={item?.checked}  />
    <input ref={inputRef} disabled={disableInput || item.checked} onChange={(e)=>{
     console.log(e.target)
     dispatch({type:'EDIT_ITEM',payload:{id:item.id,value:e.target.value}})
    }} className={`${item?.checked ? 'line-through' : ''} focus:outline-0 w-full rounded-lg  ps-2 ${!disableInput && !item.checked && 'bg-gray-200 text-gray-600'} `} type="text" value={item?.todo} />
    </div>
    <div className='flex-1/5 flex justify-end'>
     <button disabled={item.checked} onClick={()=>setDisableInput(prev=>!prev)} className={`border-1 p-1 m-1 rounded-lg ${item.checked && 'hidden'}`}>
         <MdEdit/>
     </button>
     <button onClick={()=>dispatch({type:'REMOVE_TODO',payload:item.id})} className='border-1 p-1 m-1 rounded-lg'>
         <MdCancel/>
     </button>
    </div>
 </div>
  )
}

export default TodoListItem
