import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Search from "./pages/Search.js";


const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Search />
      <Footer/>
    </div>
  </Router>
);

export default App;
