import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuotePage from './pages/QuotePage';
import './App.css';
import Layout from './Components/Layout/Layout';
import Calculator from './Components/Calculator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<QuotePage />} />
      </Route>
    </Routes>
  );
}

export default App;
