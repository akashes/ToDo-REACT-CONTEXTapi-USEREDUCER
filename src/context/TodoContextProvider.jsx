import React, { useContext, useEffect, useReducer } from 'react'
import { TodoContext } from './TodoContext'


const reducerFunction=(state,action)=>{
    switch(action.type){
        case 'ADD_TODO' : 
        return [...state,action.payload]

        case 'REMOVE_TODO' : 
        return state.filter(item=>item.id!==action.payload)

        case 'EDIT_TODO' : 
        return state.map(item=>{
          return  item.id === action.payload.id? {...action.payload} : item
          
        })
        case 'CHECK_ITEM' : 
        console.log('inside check item')
        const newState =  state.map(item=>{
            return item.id == action.payload?{...item,checked:true}:item
        })
        console.log(newState)
        return newState

        case 'UNCHECK_ITEM' :
            console.log('inside uncheck item')
            return state.map(item=>{
                return item.id===action.payload?{...item,checked:false}:item
            })

            case 'EDIT_ITEM' :
                console.log('inside edit item')
                const newVal =  state.map(item=>{

                    return item.id === action.payload.id?{...item,todo:action.payload.value}:item
                })
                console.log(newVal)
                return newVal

                case 'REMOVE_FINISHED':
                    console.log('inside remove_checked')
                    const latest =  state.filter(item=>{
                        console.log(item)
                     return item.checked ===false
                    })
                    console.log(latest)
                    return latest ?? []
    }
}

const TodoContextProvider = ({children}) => {
    //load initial todos from local storage
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
    console.log(savedTodos)
    const[todo,dispatch]=useReducer(reducerFunction,savedTodos)
    console.log(todo)

    useEffect(()=>{
        console.log('inside useeffect')
        console.log(todo)
        localStorage.setItem('todos',JSON.stringify(todo))

    },[todo])
  return (
    <TodoContext.Provider value={{todo,dispatch}} >
        {children}
      
    </TodoContext.Provider>
  )
  
}
//custom hook


export default TodoContextProvider
