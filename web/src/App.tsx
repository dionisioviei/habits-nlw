import "./styles/global.css";
import { Habits } from "./components/Habits";

function App() {
  return (
    <>
      <Habits completed={3} />
      <Habits completed={5} />
      <Habits completed={10} />
    </>
  );
}

export default App;
