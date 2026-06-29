import UseStateComponent from "./components/hooks/useState";
import UseEffectComponent from "./components/hooks/useEffect";
import UseRefComponent from "./components/hooks/useRef";
import UseContextComponent from "./components/hooks/useContext/useContext";
import UseMemoComponent from "./components/hooks/useMemo";
import UseCallbackComponent from "./components/hooks/useCallback";

function App() {
  return (
    <div className="min-h-screen w-full grid md:grid-cols-2 place-items-center gap-4 p-4">
      <UseStateComponent />
      <UseEffectComponent />
      <UseRefComponent />
      <UseContextComponent />
      <UseMemoComponent />
      <UseCallbackComponent />
    </div>
  );
}

export default App;
