import Answer from "./Answer"
import { useState } from "react"

const Question = ({ questionNo, question, answers, correctAnswer, playAgain, handleAnswerSelected }) => {
    const [optionSelected, setOptionSelected] = useState(initializeOptionState())

    function initializeOptionState() {
        const state = {}
        for (let i = 0; i < answers.length; i++) {
            state[answers[i]] = false
        }
        return state
    }

    function handleOptionSelected(id) {
        setOptionSelected(prevState => {
            if (prevState[id]) {
                prevState[id] = false
            }
            else {
                prevState[id] = true
                for (let i = 0; i < answers.length; i++) {
                    if (answers[i] !== id) {
                        prevState[answers[i]] = false
                    }
                }
            }
            return prevState
        })
    }

    const ans = answers.map(answer => {
        return <Answer
            key={answer}
            answer={answer}
            isCorrectAnswer={answer === correctAnswer ? true : false}
            playAgain={playAgain}
            questionNo={questionNo}
            isSelected={optionSelected[answer]}
            handleAnswerSelected={handleAnswerSelected}
            handleOptionSelected={handleOptionSelected}
        />
    })

    return (
        <div className="question">
            <p className="question--question">{question}</p>
            <div className="question--answers">
                {ans}
            </div>
            <hr className="question--rule" />
        </div>
    )
}

export default Question