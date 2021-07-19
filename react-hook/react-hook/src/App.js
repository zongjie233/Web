import React, { useState, useEffect } from "react";

function Example() {
  //声明一个state变量,useState会返回一对值：当前状态和一个更新状态的函数。唯一参数为状态的初始值
  const [count, setCount] = useState(0);
  // console.log(useState.prototype);

  // 可以一次声明多个变量
  // const [fruit, setFruit] = useState("apple");
  // const [todos, setTodos] = useState([{ zdq: "hs" }]);
  // console.log(count, fruit, todos);

  // 副作用函数，相当于componentDidMount, componentDidUpdate,当react完成对dom的更改后会运行副作用函数
  useEffect(() => {
    //使用浏览器的api更新页面标题
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <p>you clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
}

export default Example;
