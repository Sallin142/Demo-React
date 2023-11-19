import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('Personal');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // Load todos from local storage
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    // Save todos to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task !== '') {
      const newTodo = { task, category, completed: false };
      setTodos([...todos, newTodo]);
      setTask('');
    }
  };

  const toggleTodo = index => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return todo.completed;
    if (filter === 'Active') return !todo.completed;
    return todo.category === filter;
  });

  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      task,
      setTask,
      category,
      setCategory,
      filter,
      setFilter,
      addTodo,
      toggleTodo,
      filteredTodos
    }}>
      {children}
    </TodoContext.Provider>
  );
};
