import React from "react";
import { useTodos } from "@/entities/Todo/model/useTodos";
import { TodoList } from "@/entities/Todo/ui/TodoList";
import { AddTodoForm } from "@/features/AddTodo/ui/AddTodoForm";
import "./HomePage.css";

export const HomePage: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted, setFilter, filter } = useTodos();

  return (
    <div className="todo-app">
      <header className="header">
        <h1>todos</h1>
        <AddTodoForm addTodo={addTodo} />
      </header>
      <section className="main">
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </section>
      <footer className="footer">
        <span>Осталось {todos.length}</span>
        <div className="filters">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'selected' : ''}>Все</button>
          <button onClick={() => setFilter('active')} className={filter === 'active' ? 'selected' : ''}>Активные</button>
          <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'selected' : ''}>Завершенные</button>
        </div>
        <button onClick={clearCompleted}>Очистить завершенные</button>
      </footer>
    </div>
  );
};
