import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Contato from './Components/Contato';
import Produto from './Components/Produto';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <main className="mainContainer">
          <Routes>
            <Route path="/ranek" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/produto/:id" element={<Produto />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
