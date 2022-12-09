import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*// original index content from my-app setup (React default)
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

////////////////////////////////////////////////////////////////////////////////
// Components
////////////////////////////////////////////////////////////////////////////////

// function components - JS function that accepts a single props property
// const Welcome = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// };

// class components - itentical from React's point of view
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {props.name}</h1>;
//   }
// }

///////////////
// Rendering a component
// - when React sees an element that is a user-defined component it passes JSX
//   attributes and children to it as a single object called "props"
// - ALWAYS name components to start with a capital letter
// - props are read-only, a component must never edit its own props (pure function)
///////////////

// const Welcome = (props) => {
//   return <h1>Hello, {props.name} </h1>;
// };

// const WelcomeApp = () => {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const element = <WelcomeApp></WelcomeApp>;
// root.render(element);

///////////////
// Extracting components
///////////////

// const Comment = (props) => {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{props.date}</div>
//     </div>
//   );
// };

// const Avatar = (props) => {
//   return (
//     <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
//   );
// };

// const UserInfo = (props) => {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">{props.user.name}</div>
//     </div>
//   );
// };

////////////////////////////////////////////////////////////////////////////////
// State and lifecycle
////////////////////////////////////////////////////////////////////////////////

// using state correctly
// - don't modify state directly, use setState:
// this.state.comment = 'Hello';  // wrong
// this.setState({comment: 'Hello'});

// - this.props and this.state values shouldn't be relied on to calculate next state (asynchronous)
// instead use setState version that takes a function instead of object
// this.setState({ counter: this.state.counter + this.props.increment }); // wrong
// this.setState((state, props) => ({ counter: state.counter + props.increment }));

// - setState merges the object you provide into the current state

// Data flows down unidirectionally (pass own state down as props)

/*
const root = ReactDOM.createRoot(document.getElementById("root"));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

root.render(<Clock />);
*/

////////////////////////////////////////////////////////////////////////////////
// Handling events
////////////////////////////////////////////////////////////////////////////////
// - events are named in camelcase
// - with jsx you pass a function as event handler, not a string
// <button onClick={ activateLasers } Activate lasers </button>
// can't return false to block default behaviour, need to use e.preventDefault()

/*
const root = ReactDOM.createRoot(document.getElementById("root"));

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render = () => {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  };
}

root.render(<Toggle />);
*/

////////////////////////////////////////////////////////////////////////////////
// Conditional Rendering
////////////////////////////////////////////////////////////////////////////////

/*
// conditionally render elements
const UserGreeting = (props) => {
  return <h1>Welcome back!</h1>;
};

const GuestGreeting = (props) => {
  return <h1>Please sign up.</h1>;
};

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// element variables
const LoginButton = (props) => {
  return <button onClick={props.onClick}>Login</button>;
};

const LogoutButton = (props) => {
  return <button onClick={props.onClick}>Logout</button>;
};

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}{" "}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LoginControl />);
*/

// conditionally rendering a component with embedded JSX expressions:
// - with {conditionHere && <h1>This is condidional</h1> }  // returns 0
// - w/ ?: { conditionHere ? <h1>Big</h1> : <h4>Smaller</h4> }

// hide a component by returning null instead of it's render output
// const WarningBanner = (props) => {
//   if (!props.warn) {
//     return null;
//   }

//   return <div className="warning">Warning!</div>;
// };

////////////////////////////////////////////////////////////////////////////////
// Lists and keys
////////////////////////////////////////////////////////////////////////////////
// keys need to be provided to lists to provide li with stable identity
// if keys not provided, will use indexes (bad), avoid
// the key should be in the container context, not the eliment intself
// keys don't need to be globally unique
// keys are for React, they don't get passed in, if needed, use a different prop

// function ListItem(props) {
//   return <li>{props.value}</li>;
// }
// // const NumberList = (props) => {
// //   const numbers = props.numbers;
// //   const listItems = numbers.map((number) => (
// //     <ListItem key={number.toString()} value={number} />
// //   ));
// //   return <ul>{listItems}</ul>;
// // };

// // could use JSX to import directly the map result
// const NumberList = (props) => {
//   const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) => (
//         <ListItem key={number.toString()} value={number} />
//       ))}
//     </ul>
//   );
// };

// const numbers = [1, 2, 3, 4, 5];
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<NumberList numbers={numbers} />);

////////////////////////////////////////////////////////////////////////////////
// Forms - controlled components
////////////////////////////////////////////////////////////////////////////////

// in React <input type="text"> <textarea> and <select> work similarly (value)
// file input is uncontrolled
// if a value is set without handler, it can be editable if it was set to null

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };
//   }

//   handleChange = (event) => {
//     this.setState({ value: event.target.value });
//   };

//   handleSubmit = (event) => {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             /* textarea uses the same syntax in React, with value*/
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

//////////////////
// Handling multiple inputs
//////////////////
// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2,
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;
//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange}
//           />
//         </label>
//       </form>
//     );
//   }
// }

// the two below are equivalent (first uses ES6 "compound property name")
// this.setState({
//   [name]: value,
// });

// var partialState = {};
// partialState[name] = value;
// this.setState(partialState);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<NameForm />);

////////////////////////////////////////////////////////////////////////////////
// Lifting State Up
////////////////////////////////////////////////////////////////////////////////

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 - 32;
};

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 10) / 10;
  return rounded.toString();
};

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>This water will boil.</p>;
  } else {
    return <p>This water will not boil.</p>;
  }
};

class TemperatureInput extends React.Component {
  handleChange = (event) => {
    this.props.onTemperatureChange(event.target.value);
  };

  render = () => {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  };
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />{" "}
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />{" "}
        <BoilingVerdict celsius={parseFloat(celsius)} />{" "}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculator />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
