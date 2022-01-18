import React from "react";

/*function sayHello() {
    console.log("Hello");
}*/

/*const Header = () => {
    return <h1>Click Button</h1>;
}*/
import Header from "./components/Header"


/*class Button extends React.Component {
    render () {
    return <button onClick={sayHello}><h1>Click Me!</h1></button>;
    };
}*/
import Button from "./components/Button"

import Button2 from "./components/Button2";
//import CounterTest from "./components/CounterTest";
import Form from "./components/Form";
import COUNTERUseState from "./components/COUNTERUseState.js";

/*const App = () => {
    return <h1>"Hello World !!!"</h1>
}*/

class App extends React.Component {
    render() {
        return (
        <div> 
            <Header text="Hit it!" /> 
            <Button label="Click Me!"/> <br /> <br/>
            <Button2 /> <br /> <br/>
            {/* <CounterTest /> */ }
            <Form />
            <COUNTERUseState />
        </div>
        );
    }
}

export default App;