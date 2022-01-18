import React from 'react';

function sayHello() {
    console.log("Hello");
}

const Button = () => {
    return <button onClick={sayHello}>Click Me!</button>
}

export default Button;