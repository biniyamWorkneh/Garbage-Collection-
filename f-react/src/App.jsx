// App.js
import React from "react";
// import Sidebar from "../MainComponent/Sidebar";
// import Nav from "../MainComponent/Nav";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Login from "../components/Login";
import Footer from "../components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Login />
      <Footer/>
      {/* <Sidebar/>
      <Nav/> */}
    </div>
  );
};

export default App;
