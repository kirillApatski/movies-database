import React, {Dispatch, useEffect} from 'react';
import './App.css';
import Header from "common/Header/Header";
import Footer from "common/Footer/Footer";
import AppBody from "components/AppBody/AppBody";
import {getMovies} from "store/slice/moviesSlice";
import {useDispatch} from "react-redux";

function App() {
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    dispatch(getMovies())
  }, [])
  return (
    <div className="App">
      <Header/>
      <AppBody/>
      <Footer/>
    </div>
  );
}

export default App;
