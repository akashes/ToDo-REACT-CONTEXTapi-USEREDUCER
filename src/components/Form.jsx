import React from 'react'
import { useTodo } from '../context/TodoContext';
const Form = () => {
    const {todo,dispatch}=useTodo()
    const handleForm=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const todo = formData.get('todo');
        dispatch({type:'ADD_TODO',payload:{id:Date.now(),todo,checked:false}})
        //empty the input
        e.currentTarget.reset()


       

    }
  return (
    <form onSubmit={handleForm} className='my-5 bg-slate-200 max-w-lg mx-auto relative overflow-hidden rounded-lg h-auto  '>
      <input name='todo' type="text" placeholder='Enter Todo' className='text-gray-600 focus:outline-0 p-3 w-full px-5' />
      <button type='submit' className='absolute right-0 bottom-0 top-0 px-4 bg-green-700   text-white '>Add</button>
    </form>
  )
}

export default Form
