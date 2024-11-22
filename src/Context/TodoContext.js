import { createContext, useContext, } from "react";

const todoContext = createContext({

    todos:[{
        id:1,
        todo: "my todo",
        completed: false
    }],

    addTodo:  (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id, todo)=>{},
    toggleComplete: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider
