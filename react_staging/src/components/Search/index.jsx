import React, { Component } from "react";

export default class Search extends Component {
  search = () => {
    //获取用户输入
    const {
      keyWordElement: { value: KeyWord },
    } = this;
    console.log(KeyWord);
    //发送网络请求
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
