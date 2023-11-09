import { click } from "@testing-library/user-event/dist/click";
import React from "react";
class ChildExample extends React.Component {
  state = {
    name: "",
    age: "",
    clickCount: 0,
  };

  handleOnChange = (event) => {
    //console.log(name, " event target: ", event.target, " event: ", event);
    this.setState({
      name: event.target.value,
      age: event.target.value,
    });
  };

 

  handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    let { name, age } = this.props;
    return (
      <>
        <div>
          my name : {name}, my age: {age}
        </div>
      </>
    );
  }
}

export default ChildExample;
