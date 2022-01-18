import React from "react";

function sayHello() {
    console.log("Hello!");
    alert("Your file is being uploaded!");
}

class Button extends React.Component {
    render () {
        //return <button onClick={sayHello}>Click Me!</button>;
        return <button onClick={sayHello}>{this.props.label}</button>;
    }

}

export default Button;