import React, { useState } from "react";

const COUNTERUseState = () => {
    const [clicks, setClicks] = useState(0);

    function handleButtonclick() {
        setClicks(clicks+1);
    }

    return (
        <div>
            <br /> <br />
            <span>You Clicked {clicks} clicks.</span> <br /> <br />
            <button onClick={handleButtonclick}>Click Me! </button>
        </div>
    );
}

export default COUNTERUseState;