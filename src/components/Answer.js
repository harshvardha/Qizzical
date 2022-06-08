const Answer = ({ answer, isSelected, handleIsSelected }) => {
    const style = {
        backgroundColor: isSelected ? "#D6DBF5" : "#F5F7FB",
        border: isSelected ? "0px" : "1px solid #4D5B9E"
    }
    return (
        <div className="answer" style={style} onClick={() => handleIsSelected()}>
            <p className="answer--option">{answer}</p>
        </div>
    )
}

export default Answer