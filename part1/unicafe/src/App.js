import React, { useState } from 'react'


const Statistics = (props) => {
    const all = props.good + props.bad + props.neutral
    const average = (1 * props.good + 0 * props.neutral + -1 * props.bad) / all
    const positive = props.good / all * 100

    if (all === 0) {
        return <p>No feedback received</p>
    }
    return (
        <div>
            <h1>Statistics</h1>
            <p>Good: {props.good} </p>
            <p>Neutral: {props.neutral} </p>
            <p>Bad: {props.bad} </p>
            <p>All: {all} </p>
            <p>Average: {average} </p>
            <p>Positive: {positive}</p>
        </div>
    )
}


const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Please give feedback</h1>

            <button onClick={() => setGood(good + 1)} >Good</button>
            <button onClick={() => setNeutral(neutral + 1)} >Neutral</button>
            <button onClick={() => setBad(bad + 1)} >Bad</button>

            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App

