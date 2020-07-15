import React from 'react';
import './App.css';
import Buscador from "./Componentes/Buscador"

class App extends React.Component {

  state = {
    termino: "",
    imagenes: []
  }

  consultarApi = () =>{
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/videos/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30`

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))
  }

  datosBusqueda = (termino) =>{
    this.setState({
      termino
    }, () => { this.consultarApi() })
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
