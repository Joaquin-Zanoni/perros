import React from 'react'
import { NavBar, Invocador, Champs, Home } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
function App() {
  console.log(window.location)
  return (
    <>

      <NavBar />



      <div className='container'>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/champs" element ={<Champs/>}/>
          <Route path="/invocador" element ={<Invocador/>}/>

        </Routes>
      </div>

      {/* <div>    <Footer /></div> */}
    </>
  )
}

export default App