import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete, onUpdate }) {
  if (!todos.length) return <p>No todos yet.</p>;

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={() => onToggle(todo._id, todo.completed)}
          onDelete={() => onDelete(todo._id)}
          onUpdate={onUpdate}    // <-- added
        />
      ))}
    </ul>
  );
}
