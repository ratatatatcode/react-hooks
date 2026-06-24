import UseStateComponent from "./components/hooks/useState";
import UseEffectComponent from "./components/hooks/useEffect";
import UseRefComponent from "./components/hooks/useRef";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-4 p-4">
      <UseStateComponent />
      <UseEffectComponent />
      <UseRefComponent />
    </div>
  );
}

export default App;
