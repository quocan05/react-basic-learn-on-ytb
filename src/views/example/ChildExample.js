import React from "react";
class ChildExample extends React.Component {
  state = {
    name: "",
    age: "",
  };

  handleOnChange = (event) => {
    //console.log(name, " event target: ", event.target, " event: ", event);
    this.setState({
      name: event.target.value,
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
