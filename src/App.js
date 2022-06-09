import Home from "./components/Home";
import Quiz from "./components/Quiz";
import { useState } from "react"

function App() {
  const [started, setStarted] = useState(true)

  function handleStarted() {
    setStarted(prevState => !prevState)
  }
  return (
    <div className="App">
      {!started && <Home handleStarted={handleStarted} />}
      {started && <Quiz />}
    </div>
  );
}

export default App;
