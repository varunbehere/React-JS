import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo,updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [editableTodoId, setEditableTodoId] = useState(null)
    const [todoText, setTodoText] = useState('')
    const todos = useSelector (state => state.todos)
    const dispatch = useDispatch()

    const editHandler = (todo)=>{
      if (isTodoEditable  && editableTodoId === todo.id){
        // updateTodo (editableTodoId, todoText)
        dispatch (updateTodo({id : todo.id, text : todoText, }))
        setIsTodoEditable(false)
        setEditableTodoId(null)
      }
      else {
        setIsTodoEditable(true)
        setEditableTodoId(todo.id)
        setTodoText(todo.text)
      }
    }
    return (
    <>
    <div className=' text-white text-3xl mt-5 font-bold'> Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <input 
              className='bg-zinc-800 text-white text-l focus:outline-none'
              value = {isTodoEditable && editableTodoId === todo.id ? todoText : todo.text}
              onChange={(e)=>setTodoText(e.target.value)}
              readOnly = {!isTodoEditable || editableTodoId !== todo.id}/>

            <div className=' flex item-center gap-2 text-white'>
              <button 
                className='bg-blue-400 px-3 rounded hover:bg-blue-500'
                onClick={()=>{editHandler(todo)}}>
                {isTodoEditable && editableTodoId === todo.id ? "Save" : "Edit"}
              </button>
              <button
              onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              > Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
