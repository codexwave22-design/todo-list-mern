import React, { useState } from 'react';

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const saveEdit = () => {
    if (!newText.trim()) return;
    onUpdate(todo._id, newText.trim());
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>

      {/* LEFT SIDE */}
      <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
        />

        {/* If editing, show input */}
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </label>

      {/* RIGHT SIDE */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {!isEditing ? (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
        ) : (
          <>
            <button className="save-btn" onClick={saveEdit}>Save</button>
            <button className="cancel-btn" onClick={() => { setIsEditing(false); setNewText(todo.text); }}>Cancel</button>
          </>
        )}

        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>

    </li>
  );
}
