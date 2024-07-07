import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "./TodoItem";
import { Todo } from "../model/types";

test("allows users to toggle a todo", () => {
  const todo: Todo = { id: 1, title: "Test Todo", completed: false };
  const onToggle = jest.fn();
  const onDelete = jest.fn();
  render(<TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />);

  fireEvent.click(screen.getByRole("checkbox"));

  expect(onToggle).toHaveBeenCalledWith(1);
});

test("allows users to delete a todo", () => {
  const todo: Todo = { id: 1, title: "Test Todo", completed: false };
  const onToggle = jest.fn();
  const onDelete = jest.fn();
  render(<TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />);

  fireEvent.click(screen.getByText(/delete/i));

  expect(onDelete).toHaveBeenCalledWith(1);
});
