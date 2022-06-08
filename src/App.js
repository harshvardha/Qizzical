import Home from "./components/Home";
import Quiz from "./components/Quiz";
import { useState, useEffect } from "react"

function App() {
  const [started, setStarted] = useState(true)
  const [quizQuestions, setQuizQuestions] = useState([])

  useEffect(() => async () => {
    const data = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    const res = await data.json()
    const quizQuestions = res.results.map(ques => {
      const ans = [...ques.incorrect_answers]
      const randomIndex = Math.floor(Math.random() * 4)
      ans.splice(randomIndex, 0, ques.correct_answer)
      return {
        question: ques.question,
        answers: ans,
        correct_answer: ques.correct_answer
      }
    })
    setQuizQuestions(quizQuestions)
  }, [])

  console.log(quizQuestions)

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
