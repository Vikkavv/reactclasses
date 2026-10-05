import { Component } from "react";
import NumeroHijo from "../NumeroHijo";

class NumeroPadre extends Component{

    state = {
        suma: 0,
        numList: [],
        bool: false
    }

    sumarNumeros = (numero) => {
        this.setState({suma: this.state.suma + numero});
    }

    generarNumerosAleatorios() {
        for (let i = 0; i < this.props.cantidadDeNumerosIniciales; i++) {
            let num = parseInt(Math.random() * 120) + 1;
            this.state.numList.push(<NumeroHijo key={num} numero={num} sumarNumeros={this.sumarNumeros} />);
        }
        this.setState({numList: this.state.numList});
    }

    generarNuevoNumero = () => {
        let num = parseInt(Math.random() * 120) + 1;
        this.state.numList.push(<NumeroHijo key={num} numero={num} sumarNumeros={this.sumarNumeros} />);
        this.setState({numList: this.state.numList});
    }

    render() {
        return(
            <>  
                {   
                    this.state.numList.length < 1
                    ?
                    this.generarNumerosAleatorios()
                    :
                    <></>
                }
                <h1>Padre números</h1>
                <h2>La suma es: {this.state.suma}</h2>
                <button onClick={this.generarNuevoNumero}>Generar número</button>
                {this.state.numList}
            </>
        );
    }
}

export default NumeroPadre;