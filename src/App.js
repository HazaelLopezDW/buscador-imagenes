import React from 'react';
import './App.css';
import Buscador from "./Componentes/Buscador"

function App() {
  return (
    <div className='app container'>
      <div className="jumbotron">
        <p className="lead text-center">Buscador De Imagenes</p>
        <Buscador/>
      </div>
    </div>
  );
}

export default App;
