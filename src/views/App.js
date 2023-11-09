import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";
import MyExample from "./example/MyExample";
import RenderingList from "./learn-myself/RenderingList";
import RespondingEvent from "./learn-myself/RespondingEvent";

function App() {
  // if want more than a component respond together when click one of the
  let [count, setCount] = useState(0);
  function clickTogether() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World by React-QuocAn</p>

        {/* <MyButton /> */}
        {/* <MyProfile /> */}
        {/* <MyExample /> */}
        {/* <MyExample></MyExample> */}

        {/* <RenderingList></RenderingList> */}
        <RespondingEvent></RespondingEvent>

        <p>Two button below will update click times together:</p>
        <RespondingEvent
          count={count}
          onClick={clickTogether}
        ></RespondingEvent>
        {/* <MyButton count={count} onClick={clickTogether}></MyButton>
        <MyButton count={count} onClick={clickTogether}></MyButton> */}
      </header>
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>click {count} times</button>;
}

function MyProfile() {
  return <div> this is my profile </div>;
}

export default App;
