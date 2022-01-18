# Create a new file index.js in src folder in the project folder.
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(<h1>Hello!</h1>, document.queryselector("#root"));

# To follow the convension, create a new file App.js in src folder in the project folder and then import this App.js components inside the index.js file.
import React from "raact";

const App = () => {
    return <h1>Hello!</h1>
}

export default App;