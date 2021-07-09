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

  replaceShow = (id, title) => {
    //实现replace跳转到Detail组件 携带params参数
    this.props.history.replace(`/home/message/detail/${id}/${title}`);
  };

  pushShow = (id, title) => {
    //实现replace跳转到Detail组件
    this.props.history.push(`/home/message/detail/${id}/${title}`);
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
                &nbsp;
                <button
                  onClick={() => {
                    this.pushShow(messageObj.id, messageObj.title);
                  }}
                >
                  push查看
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    this.replaceShow(messageObj.id, messageObj.title);
                  }}
                >
                  replace查看
                </button>
                {/* 向路由组件传递search参数 */}
                {/* <Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{ messageObj.title }</Link> */}
                {/* 向路由组件传递state参数 */}
                {/* <Link
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: messageObj.id, title: messageObj.title },
                  }}
                >
                  {messageObj.title}
                </Link> */}
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />

        {/* search参数无需声明接收，正常注册路由即可*/}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* state参数无需声明接收，正常注册路由即可*/}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
      </div>
    );
  }
}
