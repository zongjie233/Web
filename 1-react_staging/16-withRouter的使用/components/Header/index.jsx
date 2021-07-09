import React, { Component } from "react";
import { withRouter } from "react-router";

class Header extends Component {
  Back = () => {
    this.props.history.goBack();
  };

  Forward = () => {
    this.props.history.Forward();
  };

  render() {
    return (
      <div>
        <h2>React Router Demo </h2>
        <button onClick={this.Back}>后退</button>
        <button onClick={this.Forward}>前进</button>
      </div>
    );
  }
}

//将一般组件附加上路由组件的属性
export default withRouter(Header);
