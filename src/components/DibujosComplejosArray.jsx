import { Component } from "react";

class DibujosComplejosArray extends Component {

    dibujarNumeros = () => {
        let lista = [];
        for(let i= 1; i <= 7; i++){
            let num = parseInt(Math.random() * 120) + 1;

            lista.push(<li key={i}>{num}</li>);
        }
        return lista;
    }

    render (){
        return(
            <>
                <h1>Dibujos complejos arrays.</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </>
        );  
    }
}

export default DibujosComplejosArray;