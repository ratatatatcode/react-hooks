import { useEffect, useRef, useState } from "react";

export default function UseRefComponent() {
  const squareRef = useRef<HTMLDivElement | null>(null);
  const [squareX, setSquareX] = useState(0);
  const [squareY, setSquareY] = useState(0);

  useEffect(() => {
    if (squareRef.current) {
      const squareRect = squareRef.current.getBoundingClientRect();
      setSquareX(squareRect.x);
      setSquareY(squareRect.y);
    }
  }, []);

  return (
    <div className="h-auto w-120 border rounded-md p-4 shadow-md">
      <h2 className="font-semibold">useRef</h2>
      <p className="text-sm mb-2">
        useRef stores a value that persists between renders without causing a
        re-render when it changes. Unlike useState, you can access and modify
        ref.current immediately.
      </p>
      <p className="text-sm">
        useRef gives me a reference to the actual DOM element. After the
        component mounts, I use that reference to read the element's position
        with getBoundingClientRect(). I then store the position in state so
        React can display it in the UI.
      </p>
      <hr className="my-2" />
      <div className="flex items-center justify-between">
        <div className="h-20 w-20 border" ref={squareRef}></div>
        <div>
          <p>Position X {squareX.toFixed(2)}</p>
          <p>Position Y {squareY.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
