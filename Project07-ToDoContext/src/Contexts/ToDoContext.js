import { useContext, createContext } from "react";

export const todoContext = createContext({
    todos:[
        {
            id :1,
            todo : "message",
            completed : false,
        }
    ],
    adTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id) =>{},
})

export const  useTodo = ()=>{
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider()