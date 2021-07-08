import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    // console.log("收到数据");
    // //获取用户输入
    const {
      keyWordElement: { value: keyWord },
    } = this;
    // //发送请求之前通知APP更新状态、
    // this.props.updateAppState({ isFirst: false, isLoading: true });
    //发布消息
    PubSub.publish("atguigu", { isFirst: false, isLoading: true });
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      (response) => {
        //     //请求成功更新状态
        PubSub.publish("atguigu", {
          isLoading: false,
          users: response.data.items,
        });
      },
      (error) => {
        //     //请求失败后更新状态
        PubSub.publish("atguigu", { isLoading: false, err: error.message });
      }
    );
    // 发送网络请求
  };
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              ref={(c) => {
                this.keyWordElement = c;
              }}
              type="text"
              placeholder="enter the name you search"
            />
            &nbsp;<button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}
