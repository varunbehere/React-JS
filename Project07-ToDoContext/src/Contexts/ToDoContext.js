import { useContext, createContext } from "react";

export const todoContext = createContext({
    todos:[
        {
            id :1,
            todo : "message",
            completed : false,
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id) =>{},
})

export const TodoProvider = todoContext.Provider()

export const  useTodo = ()=>{
    return useContext(todoContext);
}