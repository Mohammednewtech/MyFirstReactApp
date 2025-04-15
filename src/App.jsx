import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './componenets/Header/Header';
import Footer from "./componenets/Footer/Footer"
import Newmain from './componenets/Main/Newmain';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <Header />
     <Newmain />
     <Footer />
    </>
  )
}

export default App
