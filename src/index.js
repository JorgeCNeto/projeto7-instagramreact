// import ReactDOM from "react";

// import App from "./components/App";

// ReactDOM.render(<App />, document.querySelector(".root"));

import React from 'react'; 
import ReactDOM from 'react-dom/client'; 

import App from "./components/App";

const root = ReactDOM.createRoot(document.querySelector(".root"))

root.render(<App />);