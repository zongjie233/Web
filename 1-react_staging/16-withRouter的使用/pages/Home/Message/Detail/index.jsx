import React, { Component } from "react";
// import qs from "querystring";

const DetailDate = [
  { id: "01", content: "hello, CQ" },
  { id: "02", content: "hello, ND" },
  { id: "03", content: "hello, ZDQ" },
];
export default class Detail extends Component {
  render() {
    // 接收params参数;
    const { id, title } = this.props.match.params;

    // //接收search参数
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1));

    // //接收state参数
    // const { id, title } = this.props.location.state;

    const findResult = DetailDate.find((detailObj) => {
      return detailObj.id === id;
    });

    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    );
  }
}
