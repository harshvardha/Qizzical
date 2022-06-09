import Question from "./Question"
import { nanoid } from "nanoid"
import { useState, useEffect } from "react"

const Quiz = () => {
    const [quizQuestions, setQuizQuestions] = useState([])
    const [answerSelected, setAnswerSelected] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" })
    const [playAgain, setPlayAgain] = useState(false)
    let score = 0

    function handleAnswerSelected(id, answer) {
        setAnswerSelected(prevSelected => {
            const newState = { ...prevSelected }
            newState[id] = answer
            return newState
        })
    }

    function checkAnswers() {
        console.log(answerSelected)
        for (let i = 1; i <= 5; i++) {
            if (answerSelected[i] === quizQuestions[i - 1].correct_answer) {
                score++
            }
        }
        console.log(score)
        setPlayAgain(prevState => !prevState)
    }

    function restart() {
        setPlayAgain(prevState => !prevState)
        console.log("game restarted")
    }

    useEffect(() => async () => {
        const data = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        const res = await data.json()
        let quesNo = 0
        const quizQuestions = res.results.map(ques => {
            const ans = [...ques.incorrect_answers]
            const randomIndex = Math.floor(Math.random() * 4)
            quesNo++
            ans.splice(randomIndex, 0, ques.correct_answer)
            return {
                id: nanoid(),
                questionNo: quesNo,
                question: ques.question,
                answers: ans,
                correct_answer: ques.correct_answer
            }
        })
        console.log(quizQuestions)
        setQuizQuestions(quizQuestions)
    }, [])

    const questions = quizQuestions.map(ques => <Question
        key={ques.id}
        questionNo={ques.questionNo}
        question={ques.question}
        answers={ques.answers}
        handleAnswerSelected={handleAnswerSelected}
    />)
    console.log(score)

    return (
        <div className="quiz">
            <div className="top--right--design"></div>
            {<div className="bottom--left--design"></div>}
            <div className="quiz--question--container">
                {questions}
            </div>
            {playAgain && <p className="quiz--score">You scored {score}/5 correct answers</p>}
            <button type="button" className="quiz--check--answers--button" style={{ marginLeft: !playAgain ? "700px" : "20px" }} onClick={!playAgain ? checkAnswers : restart}>{playAgain ? "Play Again" : "Check Answers"}</button>
        </div>
    )
}

export default Quiz