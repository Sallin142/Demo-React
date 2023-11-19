import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  return (
    <div
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={toggleTodo}
    >
      {todo.task} - <em>{todo.category}</em>
    </div>
  );
}

export default TodoItem;
