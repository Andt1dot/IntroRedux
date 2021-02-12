import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="allContent">
      <App />
      <footer className="footer">
      Web page created by <b>'Vlad Morari'</b> and <b>'Marin Cebotari'  </b>
      </footer>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
