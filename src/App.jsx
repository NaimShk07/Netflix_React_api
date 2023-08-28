import React from 'react';
import "./App.scss";
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tvshow' element={<Home />} />
          <Route path='/movies' element={<Home />} />
          <Route path='/recentlyadded' element={<Home />} />
          <Route path='/mylist' element={<Home />} />
        </Routes>


      </Router>


    </>
  );
};

export default App;