import React, { useState } from "react";
import FunctionContextComponent from "./functionContext";
export const ThemeContext = React.createContext(true);

export default function UseContextComponent() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => setDarkTheme((prev) => !prev);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className="h-auto w-120 border rounded-md p-4 shadow-md">
        <h2 className="font-semibold">useContext</h2>
        <p className="text-sm">
          Shares data between components without passing props manually.
        </p>
        <hr className="my-2" />
        <FunctionContextComponent />
        <div className="flex justify-end">
          <button
            className="border rounded-md px-2 py-1 text-white font-semibold text-sm bg-black"
            onClick={toggleTheme}
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
