import logo from "./logo.svg";
import "./App.scss";
import MyExample from "./example/MyExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World by React-QuocAn</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <MyButton /> */}
        {/* <MyProfile /> */}
        {/* <MyExample /> */}
        <MyExample></MyExample>
      </header>
    </div>
  );
}

function MyButton() {
  return <button>I'm a button</button>;
}

function MyProfile() {
  return <div> this is my profile </div>;
}

export default App;
