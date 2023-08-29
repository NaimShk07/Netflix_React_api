import React from 'react';
import "./App.scss";
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.jsx/Home';

const App = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </Router>




    </>
  );
};

export default App;