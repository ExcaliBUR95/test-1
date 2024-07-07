import React from 'react';
import { Todo } from '../model/types';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => (
  <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
    />
    <span>{todo.title}</span>
    <button onClick={() => onDelete(todo.id)}>Удалить</button>
  </div>
);
