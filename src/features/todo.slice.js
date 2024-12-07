import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching todos
export const fetchTodosAsync = createAsyncThunk(
  "todos/fetchTodosAsync",
  async (token, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3310/todos", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Pass token with request
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      const data = await response.json();
      return data.todos; // Return fetched todos
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodosAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload; // Replace with fetched todos
      })
      .addCase(fetchTodosAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;
