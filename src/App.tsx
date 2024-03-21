import { RequestProvider } from "./context/request";
import InputLine from "./components/InputLine";

function App() {
  return (
    <RequestProvider>
      <main>
        <InputLine />
      </main>
    </RequestProvider>
  );
}

export default App;
