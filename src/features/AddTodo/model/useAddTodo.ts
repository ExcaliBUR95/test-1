import { useState } from 'react';

export const useAddTodo = (addTodo: (title: string) => void) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return {
    title,
    setTitle,
    handleSubmit,
  };
};
