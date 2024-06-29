import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Home from "./Page/Home"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" component={Home} />
    </Routes>
    <Footer/>
    </>
  )
}
