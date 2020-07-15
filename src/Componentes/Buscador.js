import React from "react"

class Buscador extends React.Component{

    busquedaRef = React.createRef();

    render(){
        return(
            <div>
                <form>
                    <div className="row">
                        <div className="form-group col-md-8">
                            <input type="text" className="form-control form-control-lg" placeholder="Puedes hacer tu busqueda aquí" />
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