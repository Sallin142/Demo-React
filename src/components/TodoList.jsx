import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} toggleTodo={() => toggleTodo(index)} />
      ))}
    </div>
  );
}

export default TodoList;
