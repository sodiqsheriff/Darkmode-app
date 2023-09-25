import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Herosection'
import Pay from './Components/Payments.jsx'
import Loan from './Components/Loan.jsx'
import Section from './Components/Section'
import Earn from './Components/Earn.jsx'
import Debit from './Components/Debit.jsx'

function App() {
  

  return (
    <div className='h-full bg-black'>
    <Navbar /> 
    <Hero />
    <Pay />
    <Loan />
    <Section />
    <Earn />
    <Debit/>
    </div>
  )
}

export default App
