import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: 1, title: "First Todo", content: "This is the first todo" },
      { id: 2, title: "Second Todo", content: "This is the second todo" },
    ],
  },
  reducers: {
    todoAdd: (state, action) => {
      state.todos.push(action.payload);
    },
    todoDelete: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
  },
});

export const { todoAdd, todoDelete } = todoSlice.actions;
export default todoSlice.reducer;
