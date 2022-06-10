const Answer = ({ answer, isCorrectAnswer, playAgain, questionNo, isSelected, handleAnswerSelected, handleOptionSelected }) => {
    const selectedStyle = {
        backgroundColor: isSelected ? "#D6DBF5" : "#F5F7FB",
        border: isSelected ? "0px" : "1px solid #4D5B9E"
    }

    const correctIncorrectAnswerStyle = {
        backgroundColor: isSelected ? (isCorrectAnswer ? "#94D7A2" : "#F8BCBC") : (isCorrectAnswer ? "#94D7A2" : "#F5F7FB"),
        border: isSelected ? "0px" : (isCorrectAnswer ? "0px" : "1px solid #cccccc"),
        color: isSelected ? (isCorrectAnswer ? "#293264" : "#999999") : (isCorrectAnswer ? "#293264" : "#999999")
    }
    return (
        <div className="answer" style={playAgain ? correctIncorrectAnswerStyle : selectedStyle} onClick={() => {
            !playAgain && handleAnswerSelected(questionNo, answer)
            !playAgain && handleOptionSelected(answer)
        }}>
            <p className="answer--option" style={{ color: playAgain ? correctIncorrectAnswerStyle.color : "#293264" }}>{answer}</p>
        </div>
    )
}

export default Answer