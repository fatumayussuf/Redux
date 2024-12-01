import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) task.description = description;
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    filterTasks: (state, action) => {
      state.filter = action.payload; // "done" or "not"
    },
  },
});

export const { addTask, editTask, toggleTask, filterTasks } = todoSlice.actions;

export default todoSlice.reducer;
