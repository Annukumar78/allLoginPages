import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Register from './components/Register'
import Footer from "./components/Footer"
import SubData from './SubData'

function App() {
  
  return (
    <>
   <Navbar />
   <Cards  
     image={SubData[0].image}
     title={SubData[0].title}
     text={SubData[0].text}
     Btn={SubData[0].Btn}
   />
   <Cards
    image={SubData[1].image}
    title={SubData[1].title}
    text={SubData[1].text}
    Btn={SubData[1].Btn}
   />
   <Cards
    image={SubData[2].image}
    title={SubData[2].title}
    text={SubData[2].text}
    Btn={SubData[2].Btn}
   />
   <Cards 
    image={SubData[3].image}
    title={SubData[3].title}
    text={SubData[3].text}
    Btn={SubData[3].Btn}
   />
   <Cards
    image={SubData[4].image}
    title={SubData[4].title}
    text={SubData[4].text}
    Btn={SubData[4].Btn}
    />
   <Cards 
    image={SubData[5].image}
    title={SubData[5].title}
    text={SubData[5].text}
    Btn={SubData[5].Btn}
   />
   <Cards 
    image={SubData[6].image}
    title={SubData[6].title}
    text={SubData[6].text}
    Btn={SubData[6].Btn}
   />
   <Cards 
    image={SubData[7].image}
    title={SubData[7].title}
    text={SubData[7].text}
    Btn={SubData[7].Btn}
   />
   <Cards 
    image={SubData[8].image}
    title={SubData[8].title}
    text={SubData[8].text}
    Btn={SubData[8].Btn}
   />
   <Cards 
    image={SubData[9].image}
    title={SubData[9].title}
    text={SubData[9].text}
    Btn={SubData[9].Btn}
   />
   <Cards 
    image={SubData[9].image}
    title={SubData[9].title}
    text={SubData[9].text}
    Btn={SubData[9].Btn}
   />
   <Cards 
    image={SubData[9].image}
    title={SubData[9].title}
    text={SubData[9].text}
    Btn={SubData[9].Btn}
   />
   <Register />
   <Footer />

   </>
  )
}

export default App
