import React from 'react';

function sayHello() {
    console.log("Hello!");
}
const Header = () => {
    return <h1> Click the Button ! </h1>
}

const Button = () => {
    return <button onClick={sayHello}>Click Me!</button>
}

const App = () => {
    return (
    <>
        <Header />
        <Button />
    </>
    );
}

export default App;