import './App.css'
import { Layout } from './Layout/Layout'
import { ButtonScroll } from './components/ButtonScroll/ButtonScroll'
import { Header } from './components/Header/Header'
import { Footer } from './components/footer/Footer'

function App() {
 

  
  return (
    <div className='app'>
    <Header />

    <Layout />


    <Footer />
    <ButtonScroll />
    </div>
  )
}

export default App
