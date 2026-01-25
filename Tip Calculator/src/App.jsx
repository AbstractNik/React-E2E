import './App.css'
import TipCalculator from './components/TipCalculator'

function App() {
  return (
    <div className="app-container">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
        <div className="shape shape-7"></div>
        <div className="shape shape-8"></div>
      </div>
      <h1 className="app-title">💸 Tip Calculator</h1>
      <TipCalculator />
    </div>
  )
}

export default App
