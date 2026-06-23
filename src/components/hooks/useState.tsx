import { useState } from "react";

export default function UseStateComponent() {
  const [count, setCount] = useState(0);

  const handleUpdateButton = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="h-auto w-120 border rounded-md p-4 shadow-md">
      <h2 className="font-semibold">useState</h2>
      <hr className="my-2" />
      <div className="flex items-center justify-between">
        <p>Count {count}</p>
        <button
          className="border rounded-md px-2 py-1 text-white font-semibold text-sm bg-black"
          onClick={handleUpdateButton}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
