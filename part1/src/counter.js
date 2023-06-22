import { useState } from 'react';

const Display = ({counter}) => <div>{counter}</div>

const Button = ({ handleClick, text}) => {
    // pass in title text and the function
    return (
        <button onClick = {handleClick}>
            {text}
        </button>
    )
}
const Counter = () => {
    const [counter, setCounter] = useState(0)
    // assign counter to value of 0 initially
    // setCounter is a modifier function
     const increaseByOne = () => setCounter(counter + 1)
     const decreaseByOne = () => setCounter(counter - 1)
     const settoZero = () => setCounter(0)

    // setTimeout(
    //     () => setCounter(counter + 1),
    //     1000
    // )
    return (
        <div>
            <Display counter  = {counter} />
            <Button
                handleClick = {increaseByOne}
                text = "Add"
            />
            <Button
                handleClick = {decreaseByOne}
                text = "Minus"
            />
            <Button
                handleClick = {settoZero}
                text = "Reset"
            />
        </div>
        
    )
}
export default Counter