// Implements the store that maintains the state for the todos

import { create } from "zustand";

// Define the todo state 
export interface Todo {
    id: string;
    title: string;
} 

export interface TodoState {
    todos: Todo[]; 
    currentTodo: Todo;
    addTodo: () => void; 
    deleteTodo: (id: string) => void; 
    updateTodo: () => void; 
    setTodo: (todo: Todo) => void; 
}

// Use create function to create a hook giving us access to the state
export const useTodoStore = create<TodoState>(  (set) => ({
    todos: [{ id: "1", title: "Learn React" }, 
            { id: "2", title: "Learn Node" }],  
    currentTodo: { id: "3", title: "Learn Mongo"},
    addTodo: () => set( (state) => {
        return {
            todos: [...state.todos, {...state.currentTodo, id: new Date().getTime().toString()}], 
            currentTodo: { id: "", title: "" }
        }
    }), 
    deleteTodo: (id) => set( (state) => ({todos: state.todos.filter((t) => t.id !== id)}) ),
    updateTodo: () => set( (state) => {
        return {
            todos: state.todos.map( (item) => item.id === state.currentTodo.id ? state.currentTodo : item), 
            currentTodo: { id: "", title: "" },
        };
    }),
    setTodo: (todo) => set({ currentTodo: todo })
}));

