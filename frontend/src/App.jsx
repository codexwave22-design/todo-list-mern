import React, { useEffect, useState } from 'react';
import API from './api';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const res = await API.get('/todos');
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    try {
      const res = await API.post('/todos', { text });
      setTodos(prev => [res.data, ...prev]);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      const res = await API.put(`/todos/${id}`, { completed: !completed });
      setTodos(prev => prev.map(t => t._id === id ? res.data : t));
    } catch (err) {
      console.error(err);
    }
  };

  const updateTodoText = async (id, newText) => {
    try {
      const res = await API.put(`/todos/${id}`, { text: newText });
      setTodos(prev => prev.map(t => t._id === id ? res.data : t));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await API.delete(`/todos/${id}`);
      setTodos(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app">
      <h1>Todo MERN</h1>
      <TodoForm onAdd={addTodo} />
      {loading ? <p>Loading...</p> : (
        <TodoList 
          todos={todos} 
          onToggle={toggleTodo} 
          onDelete={deleteTodo}
          onUpdate={updateTodoText}    // <-- added
        />
      )}
    </div>
  );
}
