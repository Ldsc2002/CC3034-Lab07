import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";

ReactDOM.render(
    <App />,
    document.getElementById("app")
);

if (module.hot) {
    module.hot.accept();
}
