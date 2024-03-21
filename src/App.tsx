import "./App.css";
import { RequestProvider } from "./context/request";

function App() {
  return (
    <RequestProvider>
      <main></main>;
    </RequestProvider>
  );
}

export default App;
