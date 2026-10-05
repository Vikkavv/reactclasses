import { Component } from "react";

class DibujosComplejosRender extends Component{
    state = {
        nombres: ["Pepe", "Pablo", "Iván", "Daniel"]
    }


    render() {
        return(
            <>
                <h1>Dibujos Complejos Render</h1>
                {
                    this.state.nombres.map((nombre, i) => {
                        return(<h2 key={i}>{nombre}</h2>);
                    })
                }
            </>
        );
    }
}

export default DibujosComplejosRender;