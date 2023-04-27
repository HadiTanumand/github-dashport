import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import Profile from './components/profile/profile';
import Nav from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Landing from './components/landing/landing';

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
