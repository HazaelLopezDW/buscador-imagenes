import React from "react"

class Buscador extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <div className="row">
                        <div className="form-group col-md-8">
                            <input type="text" className="form-control form-control-lg" placeholder="Puedes hacer tu busqueda aquí" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Buscador