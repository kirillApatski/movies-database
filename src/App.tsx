import React from 'react';
import './App.css';
import Header from "components/Layout/Header/Header";
import Footer from "components/Layout/Footer/Footer";
import AppBody from "components/AppBody/AppBody";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <AppBody/>
      <Footer/>
    </div>
  );
}

export default App;
