import logo from "./logo.svg";
import "./App.css";

const formatName = (user) => {
  return user.firstName + " " + user.lastName;
};

const user = {
  firstName: "Harper",
  lastName: "Perez",
  avatarUrl:
    "https://i0.wp.com/4hdwall.com/wp-content/uploads/2017/09/funny-cat-wallpapers.jpg?resize=150%2C150",
};

const element = <p>Hello, {formatName(user)}</p>;

const getGreeting = (user) => {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
};

const element2 = <a href="https://www.reactjs.org">link</a>;
const element3 = <img src={user.avatarUrl} alt="cat"></img>;
const element4 = <img src={user.avatarUrl} alt="cat" />;
const element5 = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {element}
        {getGreeting(user)}
        {element2}
        {element3}
        {element4}
        {element5}
      </header>
    </div>
  );
};

export default App;
