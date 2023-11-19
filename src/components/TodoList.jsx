import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../context/TodoContext';

function TodoList() {
  const { filteredTodos, toggleTodo } = useContext(TodoContext);

  return (
    <div>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} toggleTodo={() => toggleTodo(index)} />
      ))}
    </div>
  );
}

export default TodoList;
