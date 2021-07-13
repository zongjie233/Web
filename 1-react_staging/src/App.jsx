import React, { Component } from "react";
import { Button } from "antd";
import "./App.less";

export default class App extends Component {
  render() {
    return (
      <div>
        app
        {/* <button>点我</button> */}
        <Button type="primary">点我</Button>
      </div>
    );
  }
}
