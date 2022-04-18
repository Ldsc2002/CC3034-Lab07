import React, { useState } from "react";
import "./css/App.css";
import { hot } from "react-hot-loader/root";

function App() {
    const [count, setCount] = useState<number>(0);
    return (
        <div className="App">
            <header className="App-header">
                count : {count}
                <button onClick={() => {setCount((c) => c + 1);}}>+</button>
                
                <button onClick={() => {setCount((c) => c - 1);}}>-</button>
                
                <p>Hello world</p>
            </header>
        </div>
    );
}

export default hot(App);
