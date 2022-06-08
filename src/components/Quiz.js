import Question from "./Question"

const Quiz = () => {
    const quiz = [
        {
            question: "How would one say goodbye in Spanish?",
            answers: {
                option1: "adios",
                option2: "hola",
                option3: "au revoir",
                option4: "salir"
            },
        },
        {
            question: "Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?",
            answers: {
                option1: "cabbage patch kids",
                option2: "transformers",
                option3: "care bears",
                option4: "rubik's cube"
            }
        },
        {
            question: "What is the hottest planet in our Solar System?",
            answers: {
                option1: "mercury",
                option2: "venus",
                option3: "mars",
                option4: "saturn"
            }
        },
        {
            question: "In which country was the caesar salad invented?",
            answers: {
                option1: "italy",
                option2: "portugal",
                option3: "mexico",
                option4: "france"
            }
        },
        {
            question: "How Many Hearts Does An Octopus Have?",
            answers: {
                option1: "one",
                option2: "two",
                option3: "three",
                option4: "four"
            }
        }
    ]

    const questions = quiz.map(question => <Question quiz={question} />)

    return (
        <div className="quiz">
            <div className="top--right--design"></div>
            {<div className="bottom--left--design"></div>}
            <div className="quiz--question--container">
                {questions}
            </div>
            <button type="button" className="quiz--check--answers--button">Check Answers</button>
        </div>
    )
}

export default Quiz