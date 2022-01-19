import React, { useState } from "react";

const Counter = () => {
    const [clicks, setClicks] = useState(0);

    function handleInputClick() {
        setClicks(clicks+1);
    }
    
    return (
        <div>
        <h1>You Clicked {clicks} clicks.</h1>
        <input type="submit" onClick={handleInputClick} />
        </div>
    )
}

export default Counter;