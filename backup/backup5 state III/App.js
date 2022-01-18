import React from 'react';
import Header from './Components/Header';
import Button from './Components/Button';

class App extends React.Component  {
    render() {
        return (
            <>
            <Header text="Hit it!" />
            <Button label="Hey!" />
            </>
        );
    }
}

export default App;