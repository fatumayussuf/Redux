import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-500 text-white p-4 text-center text-xl font-bold">
        Todo Application
      </header>
      <main className="container mx-auto p-4">
        <AddTask />
        <ListTask />
      </main>
    </div>
  );
};

export default App;
