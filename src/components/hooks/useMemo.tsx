import { useEffect, useMemo, useState } from "react";

type ToDoData = {
  todos: [
    {
      id: number;
      todo: string;
      completed: boolean;
      userId: number;
    },
  ];
};

export default function UseMemoComponent() {
  const [status, setStatus] = useState(false);
  const [todoData, setTodoData] = useState<ToDoData | null>(null);
  const filterToDos = () => {
    return todoData?.todos.filter((todo) => todo.completed === status);
  };

  const display = useMemo(filterToDos, [status, todoData]);

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      setTodoData(data);
    };

    fetchTodo();
  }, []);

  return (
    <div className="h-auto w-120 border rounded-md p-4 shadow-md">
      <h2 className="font-semibold">useMemo</h2>
      <p className="text-sm">
        Use useMemo when a calculation is expensive and you want to avoid
        recalculating it on every render.
      </p>
      <hr className="my-2" />
      {display ? "" : "Loading..."}
      {display?.map((todo) => (
        <div key={todo.id}>
          <p className="font-bold text-xs">
            {todo.id} <span className="font-normal text-sm">{todo.todo}</span>
          </p>
        </div>
      ))}
      <div className="flex justify-end">
        <button
          className="border rounded-md px-2 py-1 text-white font-semibold text-sm bg-black"
          onClick={() => setStatus((prev) => !prev)}
        >
          {status ? "Show Completed" : "Show Incomplete"}
        </button>
      </div>
    </div>
  );
}
