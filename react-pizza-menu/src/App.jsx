import './App.css'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Header from './components/Header'
import pizzaData from './data.js';


function App() {


  return (
    <div className="container">
    <Header />

    <main className="menu">
      <Menu pizzaData={pizzaData}/>
      </main>
      <Footer />
      
    </div>
  )
}


export default App
