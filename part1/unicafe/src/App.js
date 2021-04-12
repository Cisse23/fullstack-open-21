import React, { useState } from 'react'

const StatisticsLine = (props) => {
    return (
        <p>
            {props.text} {props.value}
        </p>
    )
}

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
            <StatisticsLine text='Good :' value={props.good} />
            <StatisticsLine text='Neutral :' value={props.neutral} />
            <StatisticsLine text='Bad :' value={props.bad} />
            <StatisticsLine text='All: ' value={all} />
            <StatisticsLine text='Average: ' value={average} />
            <StatisticsLine text='Positive: ' value={positive} />
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.function}>{props.text}</button>
    )
}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Please give feedback</h1>

            <Button text='Good' function={() => setGood(good + 1)} />
            <Button text='Neutral' function={() => setNeutral(neutral + 1)} />
            <Button text='Bad' function={() => setBad(bad + 1)} />

            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App

