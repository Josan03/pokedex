import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import './components/style.css';

function App() {
  return (
    <Router basename="/pokedex">
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route exact path="/about" Component={About} />
      </Routes>
    </Router>
  );
}

export default App;
