import { Component } from "react";
import Deporte from "./Deporte";

class Polideportivo extends Component{

    deportes = ["Fútbol", "Tenis", "Pádel", "VoleyBol", "Baloncesto", "Frontón"];

    state = {
        deporteFavorito: "ninguno"
    }

    deporteFavorito = (deporte) => {
        if(Array.isArray(this.deportes)){
            this.setState({deporteFavorito: deporte})
        }
    }

    render() {
        return(
            <>
                <h1>Deportes del polideportivo:</h1>
                <p>Deporte favotito: {this.state.deporteFavorito}</p>
                {
                    this.deportes.map((deporte, i) => {
                        return(<Deporte key={i} nombre={deporte} favoritoPadre={this.deporteFavorito} />)
                    })
                }
            </>
        );
    }
}

export default Polideportivo;