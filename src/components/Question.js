import Answer from "./Answer"
import { useState } from "react"

const Question = ({ quiz }) => {
    const [option1Selected, setOption1Selected] = useState(false)
    const [option2Selected, setOption2Selected] = useState(false)
    const [option3Selected, setOption3Selected] = useState(false)
    const [option4Selected, setOption4Selected] = useState(false)

    function handleIsSelected() {

    }
    return (
        <div className="question">
            <p className="question--question">{quiz.question}</p>
            <div className="question--answers">
                <Answer answer={quiz.answers.option1} isSelected={option1Selected} handleIsSelected={handleIsSelected} />
                <Answer answer={quiz.answers.option2} isSelected={option2Selected} handleIsSelected={handleIsSelected} />
                <Answer answer={quiz.answers.option3} isSelected={option3Selected} handleIsSelected={handleIsSelected} />
                <Answer answer={quiz.answers.option4} isSelected={option4Selected} handleIsSelected={handleIsSelected} />
            </div>
            <hr className="question--rule" />
        </div>
    )
}

export default Question