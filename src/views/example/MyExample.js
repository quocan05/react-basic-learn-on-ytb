import React from "react";

const myButton = <button>button of MyExample</button>;
const myDiv = <div>đầu buồi </div>;
let name = "Quocan";
class MyExample extends React.Component {
  state = {
    name: "Quoc An",
    age: 21,
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          />
          hello my name is {this.state.name}
        </div>
        <div>my age : {this.state["age"]}</div>
      </>
    );
  }
}

export default MyExample;
