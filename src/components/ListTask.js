import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.todos.tasks);

  return (
    <div className="p-4">
      {tasks.length > 0 ? (
        tasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <p className="text-center text-gray-500">No tasks available. Add one!</p>
      )}
    </div>
  );
};

export default ListTask;
