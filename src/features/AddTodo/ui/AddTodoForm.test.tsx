import { render, screen, fireEvent } from "@testing-library/react";
import { AddTodoForm } from "./AddTodoForm";

test("allows users to add a new todo", () => {
  const addTodo = jest.fn();
  render(<AddTodoForm addTodo={addTodo} />);

  fireEvent.change(screen.getByPlaceholderText(/what needs to be done?/i), {
    target: { value: "New Todo" },
  });

  fireEvent.submit(screen.getByRole("form"));

  expect(addTodo).toHaveBeenCalledWith("New Todo");
});
