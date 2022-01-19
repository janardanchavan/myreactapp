import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {myValue: "Enter your name"};
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        alert(this.state.myValue);
    }

    handleInputChange(event) {
        this.setState({myValue: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" id="name" value={this.state.myValue} onChange={(event) => this.handleInputChange(event)} />
                <input type="submit" />
            </form>
        );
    }
}

export default Form;