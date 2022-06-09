import Answer from "./Answer"
import { nanoid } from "nanoid"
import { useState } from "react"

const Question = ({ questionNo, question, answers, handleAnswerSelected }) => {
    const [optionSelected, setOptionSelected] = useState(initializeOptionState())
    let id = 0

    function initializeOptionState() {
        const state = {}
        for (let i = 1; i <= answers.length; i++) {
            state[i] = false
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
                for (let i = 1; i <= answers.length; i++) {
                    if (i !== id) {
                        prevState[i] = false
                    }
                }
            }
            return prevState
        })
    }

    const ans = answers.map(answer => {
        id++
        return <Answer
            answer={answer}
            answerNo={id}
            questionNo={questionNo}
            isSelected={optionSelected[id]}
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