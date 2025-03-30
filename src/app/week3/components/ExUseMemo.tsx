import React, { useState, useMemo } from "react";

const todos = [
  { id: 1, text: "Do laundry", completed: false },
  { id: 2, text: "Write code", completed: true },
];

export default function ExUseMemo() {
  const [tab, setTab] = useState<"all" | "completed">("all");

  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);

  return (
    <div>
      <p>
        <b>useMemo Hook</b>
      </p>
      <button onClick={() => setTab("all")}>All</button>
      <button onClick={() => setTab("completed")}>Completed</button>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

function filterTodos(
  todos: { id: number; text: string; completed: boolean }[],
  tab: "all" | "completed"
) {
  return todos.filter(
    (todo) => tab === "all" || todo.completed === (tab === "completed")
  );
}
