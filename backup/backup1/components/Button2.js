import React from "react";

class Button2 extends React.Component {
    constructor() {
        super();
        this.state = { counter : 0};
        //this.handleButton2Click = this.handleButton2Click.bind(this);
    }

    handleButton2Click() {
    //handleButton2Click = () => {
        this.setState({ counter : 1});
    }

    render() {
        //return <button onClick={this.handleButton2Click}>{this.state.counter}</button>;
        return <button onClick={() => this.handleButton2Click()}>{this.state.counter}</button>;
    }
}

export default Button2;