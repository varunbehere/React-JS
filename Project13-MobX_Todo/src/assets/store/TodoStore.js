import { makeAutoObservable } from "mobx";

class TodoStore {
    todos = []
    newTodoText = "";

    constructor(){
        makeAutoObservable(this)
    }

    addTodo(){
        if (this.newTodoText){
            this.todos.push ({
                id: Date.now(),
                text : this.newTodoText.trim(),
                completed: false
            })
            this.newTodoText = ""
        }
    }

    removeTodo (id){
        this.todos = this.todos.filter((todo) => todo.id !== id)
    }

    toggleTodoCompleted (id){
        const todo = this.todos.find ((todo) => todo.id === id)
        if (todo){
            todo.completed = !todo.completed
        }
    }

    setNewTodoText (text){
        this.newTodoText = text
    }
}

const todostore = new TodoStore();
export default todostore;