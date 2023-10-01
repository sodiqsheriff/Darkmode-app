import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Herosection'
import Pay from './Components/Payments.jsx'
import Loan from './Components/Loan.jsx'
import Section from './Components/Section'
import Earn from './Components/Earn.jsx'
import Day from './Components/Day.jsx'
import Account from './Components/Account.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  

  return (
    <div className='w-full h-full bg-black font-Inter'>
    <Navbar /> 
    <Hero />
    <Pay />
    <Loan />
    <Section />
    <Earn />
    <Day/>
    <Account />
    <Footer />
    </div>
  )
}

export default App
