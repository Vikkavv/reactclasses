const { Component } = require("react")

class Contador extends Component{
    state = {
        numero: 0
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