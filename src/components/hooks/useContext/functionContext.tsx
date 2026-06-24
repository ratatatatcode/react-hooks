import { useContext } from "react";
import { ThemeContext } from "./useContext";

export default function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);

  return (
    <div
      className={`h-30 w-full flex items-center justify-center mb-2 border ${darkTheme ? "bg-gray-950 text-white" : "bg-white text-black"}`}
    >
      <p>{darkTheme ? "Dark Theme" : "Light Theme"}</p>
    </div>
  );
}
