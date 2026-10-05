import { Component } from "react";

class Contador extends Component{
    state = {
        numero: this.props.startIn
    };

    render() {
        return(
            <>
                <h1>Contador JSX</h1>
                <h2>{this.state.numero}</h2>
                <button onClick={() => this.setState({numero: (this.state.numero + 1)})}>+</button>
                <button onClick={() => this.setState({numero: (this.state.numero - 1)})}>-</button>
            </>
        );
    }
}

export default Contador;