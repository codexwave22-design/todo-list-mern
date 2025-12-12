import React, { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form onSubmit={submit} className="todo-form">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
