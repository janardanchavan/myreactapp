import React from 'react';
import Header from './Components/Header';
import Counter from './Components/Counter';

class App extends React.Component  {
    render() {
        return (
            <>
            <Header text="Hit it!" />
            <Counter label="Hey!" />
            </>
        );
    }
}

export default App;