import React from 'react';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Domcraft.ec</h1>
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;



