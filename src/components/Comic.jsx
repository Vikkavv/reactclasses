import { Component } from "react";

class Comic extends Component{

    render() {
        return(
            <>
                <h1>Hijo comic: {this.props.comic.titulo}</h1>
                <img src={this.props.comic.imagen} alt={this.props.comic.descripcion}/>
                <button onClick={() => this.props.favorito(this.props.comic)} >Marcar como favorito</button>
                <button onClick={() => this.props.eliminarComic(this.props.index)} >Eliminar comic</button>
            </>
        );
    }
}

export default Comic;