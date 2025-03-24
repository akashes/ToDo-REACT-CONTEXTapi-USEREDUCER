import React, { useRef, useState } from 'react'
import TodoListItem from './TodoListItem';
import { useTodo } from '../context/TodoContext';
const TodoList = () => {


    const{todo,dispatch}=useTodo()
  return (
    <div className='w-full max-w-sm mx-auto flex flex-col gap-2'>
      {
 
  todo?.length>0 && todo?.map((item)=>{
    return <TodoListItem item={item} dispatch={dispatch}  />
})

      }
    </div>
  )
}

export default TodoList
