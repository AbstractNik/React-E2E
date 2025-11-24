import './App.css'
// This is a React hook that will allow us to use state in our component
import { useState, useEffect } from 'react'
import Message from './components/Message'
// useEffect is a hook that will allow us to perform side effects in our component
// side effects are anything that affects something outside of the component
// like fetching data from the API, updating the DOM, etc.
// useEffect takes two arguments: a function and an array of dependencies
// the function will be executed after the component mounts
// the array of dependencies is an array of values that if they change, the function will be executed again
// if the array of dependencies is empty, the function will be executed only once when the component mounts
// if the array of dependencies is not empty, the function will be executed again when the value of the dependency changes  

//This is the main component that will be rendered in the browser , it a function component that returns a JSX element
function App() {
  // This is a state that will store the advice
    const [advice, setAdvice] = useState('')
    // This is a state that will store the count of advices generated
    const [count, setCount] = useState(0)
    

    // This is a function that will get advice from the API , it will be called when the button is clicked and 
    // it will fetch the advice from the API and log the data to the console using async and await

   async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    console.log(data.slip.advice)
    // This is a function that will set the advice to the state
    setAdvice(data.slip.advice)
    // Increment the count each time advice is fetched
    setCount(prevCount => prevCount + 1)
   }

   // This useEffect hook will run when the component first mounts (loads)
   // It fetches advice automatically when the app starts
   useEffect(() => {
    getAdvice()
   }, [])

  // This is JSX which will be rendered in the browser
    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={getAdvice}>Get Advice</button>
            {/*  This is a paragraph that will display the advice */}
            <p><i>{advice}</i>  </p>
            {/* This is a component that will display the message */}
            {/* The count is passed as a prop to the Message component */}
            <Message count={count} />
        </div>
    )
  

  
}

export default App

/*
 * React Concepts Used in This App:
 * 
 * 1. Function Components - App is a function component that returns JSX
 * 2. JSX (JavaScript XML) - Used to write HTML-like syntax in JavaScript
 * 3. useState Hook - Used to manage component state (advice and count)
 * 4. useEffect Hook - Used to perform side effects (fetching data on component mount)
 * 5. Event Handling - onClick event handler on the button
 * 6. Props - Passing data (count) from parent component (App) to child component (Message)
 * 7. Component Composition - Using Message component inside App component
 * 8. State Updates - Using setState functions (setAdvice, setCount) to update component state
 * 9. Functional State Updates - Using functional form of setState (prevCount => prevCount + 1)
 * 10. Async/Await - Used in getAdvice function to handle asynchronous API calls
 * 11. ES6 Modules - Using import/export for code organization and reusability
 * 12. Dynamic Rendering - Rendering content dynamically based on state values:
 *     - Line 47: {advice} - renders the advice text dynamically from state
 *     - Line 50: count={count} - passes count prop dynamically to Message component
 */

