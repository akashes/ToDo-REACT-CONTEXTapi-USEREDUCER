import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
import { useTodo } from './context/TodoContext'
import TodoListItem from './components/TodoListItem'

function App() {
  const{todo,dispatch}=useTodo()
  const [checked,setChecked]=useState([])
  const [unchecked,setUnchecked]=useState([])

  useEffect(()=>{

    const calcCheckedItems=()=>{
      setChecked(
        todo.filter(item=>item.checked)
      )

    }
    const calcUncheckedItems=()=>{
      setUnchecked(
        todo.filter(item=>!item.checked)
      )

    }

    calcCheckedItems()
    calcUncheckedItems()
  },[todo])

  return (
    <main className='my-10'>
    <h1 className='text-3xl text-center font-bold mx-auto max-w-sm'>Manage Your Todos</h1>
 <div className='flex m-[10px] sm:m-[50px] flex-col  sm:flex-row gap-2'>
 <div className='sm:w-[70%] h-[50vh]'>
   <Form/>
   <TodoList/>
   </div>
   <div className='  max-w-sm mx-auto sm:w-[30%]'>
   {
    checked.length>0 && (
      <div className=' border-2 border-green-400 m-1  p-2 min-h-[200px] rounded-lg shadow-md'> 
      <h1 className='font-bold text-center'>FINISHED TODOS</h1>
     <div className='flex flex-col gap-2'>
     {
        checked.length>0 && checked.map((item,index)=>{
          return(
            <TodoListItem item={item} dispatch={dispatch} />
          )
        })
      } 
     </div>
     <button
      onClick={()=>dispatch({type:'REMOVE_FINISHED'})}
       className='m-2 p-2 block hover:bg-red-800 bg-red-700 text-white rounded-lg w-[60%] mx-auto '>REMOVE FINISHED TODOS</button>
  
      </div>
    )
   }
 {
  unchecked.length>0 && (
    <div className=' border-2 border-red-400 m-1 p-2 min-h-[200px] rounded-lg shadow-md' >
    <h1 className='font-bold text-center'>PENDING TODOS</h1>
    <div className='flex flex-col gap-2'>
    {
      unchecked.length>0 && unchecked.map((item,index)=>{
        return(
         <TodoListItem item={item} dispatch={dispatch} />
        )
      })
    }
    </div>
  </div>
  )
 }

   </div>
 </div>

    </main>
  )
}

export default App
