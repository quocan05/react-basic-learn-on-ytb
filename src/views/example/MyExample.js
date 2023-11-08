import React from "react";
import ChildExample from "./ChildExample";
const myButton = <button>button of MyExample</button>;
const myDiv = <div>đầu buồi </div>;

class MyExample extends React.Component {
  state = {
    name: "",
    age: "",
  };

  handleOnChangeName = (event) => {
    //console.log(name, " event target: ", event.target, " event: ", event);
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    //console.log(name, " event target: ", event.target, " event: ", event);
    this.setState({
      age: event.target.value,
    });
  };

  handleClick = () => {
    alert("hello world");
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="name">name: </label>
          <input
            id="name"
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />{" "}
          <br />
          <label htmlFor="age">age: </label>
          <input
            id="age"
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />{" "}
          <br />
          <input
            type="submit"
            onClick={(event) => this.handleSubmitForm(event)}
          />
        </form>

        <ChildExample name={this.state.name} age={this.state.age} />
        <button onClick={() => this.handleClick()}>Click me</button>
      </>
    );
  }
}

export default MyExample;
