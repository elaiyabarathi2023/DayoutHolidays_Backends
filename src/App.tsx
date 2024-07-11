import React from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Calculator/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Calculator" element={<Calculator />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
