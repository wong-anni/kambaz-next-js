import { createSlice } from "@reduxjs/toolkit";                                      // import createSlice
const initialState = {                                                               // declare initial state of reducer
  todos: [ 
    { id: "1", title: "Learn React" },                                               // moved here from TodoList.tsx
    { id: "2", title: "Learn Node" }, 
  ], 
  todo: { title: "Learn Mongo" },                                                    // todo has default todo
}; 
const todosSlice = createSlice({                                                     // create slice
  name: "todos",                                                                     // name slice
  initialState,                                                                      // configure store's initial state
  reducers: {                                                                        // declare reducer functions
    addTodo: (state, action) => {                                                    // addTodo reducer function, action
      const newTodos = [                                                             // contains new todo. newTodos
          ...state.todos,                                                            // copy old todos, append new todo
        { ...action.payload, id: new Date().getTime().toString() },                  // in action.payload, override id as timestamp
      ]; 
      state.todos = newTodos;                                                        // update todos
      state.todo = { title: "" };                                                    // clear todo
    }, 
    deleteTodo: (state, action) => {                                                 // deleteTodo reducer function,
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);     // action contains todo's ID to
      state.todos = newTodos;                                                        // filter out of newTodos
    }, 
    updateTodo: (state, action) => {                                                 // updateTodo reducer function
      const newTodos = state.todos.map((item) =>                                     // rebuilding newTodos by replacing
        item.id === action.payload.id ? action.payload : item                        // old todo with new todo in action.payload
      );                                                                             
      state.todos = newTodos;                                                        // update todos
      state.todo = { title: "" };                                                    // update todos
    }, 
    setTodo: (state, action) => {                                                    // setTodo reducer function
      state.todo = action.payload;                                                   // to update todo state variable
    }, 
  }, 
}); 
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;      // export reducer functions
export default todosSlice.reducer;                                                   // export reducer for store 