import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Contato from './Components/Contato';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/ranek" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
