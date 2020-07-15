import React from 'react';
import './App.css';
import Buscador from "./Componentes/Buscador"

class App extends React.Component {

  datosBusqueda = (termino) =>{
    console.log(termino);
  }

  render(){
    return (
      <div className='app container'>
        <div className="jumbotron">
          <p className="lead text-center">Buscador De Imagenes</p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
      </div>
    );
  }
}

export default App;
