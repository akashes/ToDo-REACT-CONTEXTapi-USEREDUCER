import { createContext, useContext } from "react";


 export const TodoContext = createContext()


//custom hook

export const useTodo=()=>{
    return useContext(TodoContext)
}