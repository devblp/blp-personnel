import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Page/Main";
const Layout = () => (
  <>
    <Header />
    <Home />
    <Footer />
  </>
);

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Layout />}>
        </Route>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </>
  );
}
