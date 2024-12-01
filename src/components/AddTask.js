import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoSlice';

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim()) {
      dispatch(
        addTask({
          id: Date.now(),
          description: taskDescription,
          isDone: false,
        })
      );
      setTaskDescription('');
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <input
        type="text"
        placeholder="Add a new task"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mr-4 w-1/2"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
