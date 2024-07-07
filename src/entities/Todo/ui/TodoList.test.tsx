
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoList } from './TodoList';
import { Todo } from '../model/types';

test('renders todos and allows users to interact with them', () => {
  const todos: Todo[] = [
    { id: 1, title: 'Test Todo 1', completed: false },
    { id: 2, title: 'Test Todo 2', completed: true },
  ];
  const onToggle = jest.fn();
  const onDelete = jest.fn();
  render(<TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />);

  const todoItems = screen.getAllByRole('checkbox');
  expect(todoItems).toHaveLength(2);

  fireEvent.click(todoItems[0]);
  expect(onToggle).toHaveBeenCalledWith(1);

  fireEvent.click(screen.getAllByText(/delete/i)[0]);
  expect(onDelete).toHaveBeenCalledWith(1);
});
