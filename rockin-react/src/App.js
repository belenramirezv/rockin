import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://i.ytimg.com/vi/ackeDNI_JN0/maxresdefault.jpg"
          className="App-logo"
          alt="logo"
          size="50px"
        />
        <p>Welcome to Rockin's Website.</p>
        <a
          className="App-Link"
          href="https://www.linkedin.com/belenramirezv/"
          target="_blank"
          rel="noopener noreferrer"
          color="white"
        >
          Rockin's Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
