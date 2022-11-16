import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*// original index content
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

/*// render simple element
const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <h1>Hello World.</h1>;
root.render(element);
*/

/*// render time every second (element concept)
const root = ReactDOM.createRoot(document.getElementById("root"));
const tick = () => {
  const element = (
    <div>
      <h1>Hello world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
};

setInterval(tick, 1000);
*/

const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {props.name}</h1>;
//   }
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
