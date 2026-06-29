import React, { useCallback, useState } from "react";

const CounterButton = React.memo(function ({
  handleIncrement,
  backgroundColor,
}: {
  handleIncrement: () => void;
  backgroundColor: string;
}) {
  return (
    <button
      onClick={handleIncrement}
      className="rounded-md px-2 py-1 text-sm font-semibold"
      style={{
        color: backgroundColor === "white" ? "black" : "white",
        border: `1px solid ${backgroundColor === "white" ? "black" : "white"}`,
      }}
    >
      Increment
    </button>
  );
});

export default function UseCallbackComponent() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <section className="flex items-center justify-center md:h-120 w-full">
      <div
        className="h-auto w-full md:w-120 rounded-md border p-4 shadow-md"
        style={{
          backgroundColor,
          color: backgroundColor === "white" ? "black" : "white",
          borderColor: backgroundColor === "white" ? "black" : "white",
        }}
      >
        <h2 className="font-semibold">useCallback</h2>

        <p className="mb-2 text-sm">
          The parent component always re-renders when its state changes.
        </p>

        <p className="mb-2 text-sm">
          useCallback memoizes a function so it isn't recreated on every render
          unless its dependencies change.
        </p>

        <p className="mb-2 text-sm">
          React.memo memoizes a child component and skips re-rendering if its
          props haven't changed.
        </p>

        <p className="text-sm">
          When <code>step</code> is included as a dependency, changing it
          recreates the callback with the latest value.
        </p>

        <hr
          className="my-2"
          style={{
            borderColor: backgroundColor === "white" ? "black" : "white",
          }}
        />

        <p>Count {count}</p>

        <div className="mt-2 flex items-center justify-between">
          <CounterButton
            handleIncrement={handleIncrement}
            backgroundColor={backgroundColor}
          />

          <button
            onClick={() =>
              setBackgroundColor((prev) =>
                prev === "white" ? "black" : "white",
              )
            }
            className="rounded-md px-2 py-1 text-sm font-semibold"
            style={{
              color: backgroundColor === "white" ? "black" : "white",
              border: `1px solid ${
                backgroundColor === "white" ? "black" : "white"
              }`,
            }}
          >
            {backgroundColor === "white"
              ? "Set to black background"
              : "Set to white background"}
          </button>
        </div>
      </div>
    </section>
  );
}
