import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  //鼠标移入移出怕回调
  state = { mouse: false };

  //勾选，取消勾选某一个todo的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
      // console.log('xxxx ',this)
    };
  };

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  handleDelete = (id) => {
    return () => {
      if (window.confirm("确定删除吗")) {
        this.props.deleteTodo(id);
      }
    };
  };

  render() {
    // const{mouse} = this.state
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    // console.log('yyy',this)
    return (
      <li
        style={{ backgroundColor: this.state.mouse ? "#ddd" : "white" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
