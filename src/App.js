import React from 'react';
import Navbar from './components/elements/Navbar';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
