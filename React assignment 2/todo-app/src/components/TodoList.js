import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    
    // Add new todo with unique ID
    setTodos([...todos, {
      id: Date.now(),
      text: newTodo,
      createdAt: Date.now()
    }]);
    
    // Clear input field
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Sort todos by creation time (ascending order)
  const sortedTodos = [...todos].sort((a, b) => a.createdAt - b.createdAt);

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Enter a new task"
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {sortedTodos.map(todo => (
          <li 
            key={todo.id}
            className="flex justify-between items-center p-2 bg-gray-50 rounded"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}