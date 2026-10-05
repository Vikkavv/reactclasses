import { Component } from "react";

class Deporte extends Component{
    render() {
        return(
            <>
                <h2>{this.props.nombre}</h2>
                <button onClick={() => this.props.favoritoPadre(this.props.nombre)}>Marcar como favorito</button>
            </>
        );
    }
}

export default Deporte;