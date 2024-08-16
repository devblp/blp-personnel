import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Home from "./Page/Home"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Theree from "./Page/Theree"


export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/test" element={<Theree/>} />
    </Routes>
    <Footer/>
    </>
  )
}
