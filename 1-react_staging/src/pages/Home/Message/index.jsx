import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      {
        id: "01",
        title: "message1",
      },
      {
        id: "02",
        title: "message2",
      },
      {
        id: "03",
        title: "message3",
      },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((messageObj) => {
            return (
              <li key={messageObj.id}>
                {/* 向路由组件传递params参数 */}
                <Link
                  to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}
                >
                  {messageObj.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div>
    );
  }
}
