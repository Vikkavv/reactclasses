import { Component } from "react";

class NumeroHijo extends Component{
    render(){
        return(
            <>
                <h1>Número: {this.props.numero}</h1>
                <button onClick={() => this.props.sumarNumeros(this.props.numero)}>Sumar {this.props.numero}</button>
            </>
        );
    }
}

export default NumeroHijo;