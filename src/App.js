import React from 'react';
import './App.css';
import Buscador from "./Componentes/Buscador"
import Resultado from "./Componentes/Resultado"

class App extends React.Component {

  state = {
    termino: "",
    imagenes: [],
    pagina: ""
  }

  scroll = () =>{
    const elemento = document.querySelector('.jumbotron')
    elemento.scrollIntoView('smooth', 'start')
  }

  paginaAnterior = () =>{
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;

    // Si la pagina es uno ya no ir hacia atras
    if(pagina === 1) return null;

    // sumar uno a la pagian actual
    pagina--
    // agregar el cambio a state
    this.setState({
      pagina
    }, () =>{ this.consultarApi()
              this.scroll()})
  }

  paginaSiguiente = () =>{
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;
    // sumar uno a la pagian actual
    pagina++
    // agregar el cambio a state
    this.setState({
      pagina
    }, () =>{ this.consultarApi()
              this.scroll()})
  }

  consultarApi = () =>{
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url =  `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}&per_page=32&page=${pagina}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))
  }

  datosBusqueda = (termino) =>{
    this.setState({
      termino: termino,
      pagina: 1
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
        <div className="row text-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
