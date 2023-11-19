import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoList from '../components/TodoList';

function TodoPage() {
  const { task, setTask, category, setCategory, addTodo, setFilter } = useContext(TodoContext);

  return (
    <div className="TodoPage">
      <h1>My To-Do List</h1>
      <input 
        type="text" 
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Other">Other</option>
      </select>
      <button onClick={addTodo}>Add Task</button>

      <select onChange={e => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Active">Active</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Other">Other</option>
      </select>

      <TodoList />
    </div>
  );
}

export default TodoPage;
