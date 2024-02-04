import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./authentication/LoginButton";
import LogoutButton from "./authentication/LogoutButton";
import Profile from "./authentication/Profile";

function App() {
  return (
    <div className="App">
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <Profile></Profile>
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
      </header>
    </div>
  );
}

export default App;
