import React from "react";

const myButton = <button>button of MyExample</button>;
const myDiv = <div>đầu buồi </div>;
let name = "Quocan";
class MyExample extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleOnChange = (event) => {
    //console.log(name, " event target: ", event.target, " event: ", event);
    this.setState({
      username: event.target.value,
      password: event.target.value,
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
        {/* <div>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          />
          hello my name is {this.state.name}
        </div> */}

        <form>
          <label htmlFor="username">username: </label>
          <input
            id="username"
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          />{" "}
          <br />
          <label htmlFor="password">password: </label>
          <input
            id="password"
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          />{" "}
          <br />
          <input
            type="submit"
            onClick={(event) => this.handleSubmitForm(event)}
          />
        </form>

        <div>my age : {this.state["password"]}</div>
        <button onClick={() => this.handleClick()}>Click me</button>
      </>
    );
  }
}

export default MyExample;
