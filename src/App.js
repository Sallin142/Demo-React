import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task !== '') {
      const newTodos = [...todos, { task, completed: false }];
      setTodos(newTodos);
      setTask(''); // Clear the input field after adding a task
    }
  };

  const toggleTodo = index => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <input 
        type="text" 
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add Task</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
