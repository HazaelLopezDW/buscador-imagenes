import React from "react"

class Resultado extends React.Component{
    
    mostrarImagenes = () =>{
        const imagenes = this.props.imagenes
        if(imagenes.length === 0) return null;
        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    
                </div>
            </React.Fragment>
        )
    }

    render(){
        return(
            <div>
                {console.log(this.props.imagenes)}
            </div>
        )
    }
}

export default Resultado