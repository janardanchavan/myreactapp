import React from "react";

class CounterTest extends React.Component {
    constructor() {
        super();
        this.state = { cnt : 0};
        this.aTimer = null;
    }

    componentDidMount() {
        this.aTimer = setInterval(() => {
            this.setState({cnt : this.state.cnt + 1});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.aTimer);
    }

    render() {
        return <span>{this.state.cnt}</span>
    }
}

export default CounterTest;