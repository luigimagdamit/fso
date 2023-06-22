import { useState } from 'react'
import './App.css';


const StatisticsLine = (props) => {
  const { name, count } = props
  return (
    <div>
      <h1>{name}: {count}</h1>
    </div>
  )
}
const Statistics = (props) => {
  const { good, bad, neutral, all } = props
  return (
    <div>
      <StatisticsLine name = "good" count = {good} />
      <StatisticsLine name = "bad" count = {bad} />
      <StatisticsLine name = "neutral" count = {neutral} />
      <StatisticsLine name = "all" count = {all} />
      <StatisticsLine name = "average" count = {(good - bad) / all} />
      <StatisticsLine name = "positive" count = {(good) / all} />
    </div>
  )
}
const Button = (props) => {
  const { title, onClick } = props

  return (
    <button onClick = {onClick}>
      {title}
    </button>
  )
}
const RatingExercise = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
    return (
    <div>
      bruh
      <Button onClick = {handleGood} title = "good"/>
      <Button onClick = {handleBad} title = "bad"/>
      <Button onClick = {handleNeutral} title = "neutral"/>

      <Statistics good = {good} bad = {bad} neutral = {neutral} all = {all}/>
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const handleClick = () => {
    const newIndex = Math.floor(Math.random() * 9)
    setSelected(newIndex)
  }
  const handleVotes = () => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  const [selected, setSelected] = useState(0)
  const points = Array.apply(null, Array(8)).map(Number.prototype.valueOf,0)
  const [votes, setVotes] = useState(points)
  return (
    <div>
      <button onClick={handleClick}>change</button>
      <button onClick={handleVotes}>vote</button>
      {anecdotes[selected]}
      <h1>{votes[selected]} votes</h1>
      <h1>{votes}</h1>

      <h1>{anecdotes[votes.indexOf(Math.max(...votes))]}</h1>
    </div>
  )
}


export default App;
