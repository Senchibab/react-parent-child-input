import React from "react";
import ReactDOM from "react-dom";
class Child extends React.Component {
  static getDerivedStateFromProps = (props, state) => {
    return { name: props.name };
  };

  render() {
    return (
      <div style={{ border: "2px solid grey" }}>
        <p>I am child</p>
        <p>value from parent:{this.state.name}</p>
      </div>
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: "" };
  }
  update = e => {
    this.setState({ val: e.target.value });
  };
  render() {
    return (
      <div style={{ border: "3px solid orange" }}>
        <p>
          I am parent <input value={this.state.val} onChange={this.update} />
        </p>
        <Child name={this.state.val} />
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
