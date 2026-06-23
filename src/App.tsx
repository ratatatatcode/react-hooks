import UseStateComponent from "./components/hooks/useState";
import UseEffectComponent from "./components/hooks/useEffect";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-4 p-4">
      <UseStateComponent />
      <UseEffectComponent />
    </div>
  );
}

export default App;
