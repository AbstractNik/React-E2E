
import './App.css'
import Steps from './components/Steps'

// Static data outside the component to avoid recreation
const messages = [
  "Learn React ⚛️",
  "Apply to jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  
  return (
    <>
    <h1>Learning React Step by Step</h1>
      <Steps messages={messages} />
    </>
  )
}

export default App
