import React from 'react';
import { useAddTodo } from '../model/useAddTodo';
import './AddTodoForm.css';

interface AddTodoFormProps {
  addTodo: (title: string) => void;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const { title, setTitle, handleSubmit } = useAddTodo(addTodo);

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Какие задачи на сегодня?"
        className="input"
      />
      <button type="submit" className='add-todo'>
        Добавить тудушку
      </button>
    </form>
  );
};
