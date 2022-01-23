import React, { useState, useEffect } from "react";

const Seconds = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((counter) => {
                return counter+1;
            });
        }, 1000);

        return() => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        console.log("Hello Everone!");

        return() => {
            console.log("Called before unmounting.");
        }
    }, []);

    return (
        <h1>Seconds {counter} spent.</h1>
    );
}

export default Seconds;