const Home = ({ handleStarted }) => {
    return (
        <main>
            <div className="top--right--design"></div>
            <div className="home">
                <h1 className="home--title">quizzical</h1>
                <p className="home--description">This is a quiz game consisting of questions from multiple subjects</p>
                <button className="home--start--button" onClick={() => handleStarted()}>start quiz</button>
            </div>
            <div className="bottom--left--design"></div>
        </main>

    )
}

export default Home