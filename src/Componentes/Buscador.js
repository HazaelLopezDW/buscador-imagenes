import React from "react"

class Buscador extends React.Component{

    busquedaRef = React.createRef();

    obtenerDatos = (ev) =>{
        ev.preventDefault();

        const termino = this.busquedaRef.current.value  // Tomamos el valor del input
        this.props.datosBusqueda(termino); // Y lo enviamos al componente principal

        console.log(this.busquedaRef.current.value)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.obtenerDatos}>
                    <div className="row">
                        <div className="form-group col-md-8">
                            <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Puedes hacer tu busqueda aquí" />
                        </div>
                        <div className="form-group col-md-4">
                            <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Buscador