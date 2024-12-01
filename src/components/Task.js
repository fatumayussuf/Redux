import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/todoSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task description', task.description);
    if (newDescription) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-md my-2">
      <span
        className={`flex-grow ${
          task.isDone ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {task.description}
      </span>
      <button
        onClick={handleToggle}
        className={`px-4 py-2 rounded-md ${
          task.isDone ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
        } hover:opacity-80`}
      >
        {task.isDone ? 'Undone' : 'Done'}
      </button>
      <button
        onClick={handleEdit}
        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Edit
      </button>
    </div>
  );
};

export default Task;
