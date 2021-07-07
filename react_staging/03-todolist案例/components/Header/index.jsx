import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';
import './index.css';
export default class Header extends Component {

    //对接收的props进行类型的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }


    //通过event事件实时获取用户输入的值
    handleKeyUp = (event) => {

        //解构赋值
        const { keyCode, target } = event
        //判断用户的输入，当按下enter键时输出用户输入值
        if (keyCode !== 13) return
        //添加的todo名字不能为空
        if (target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
        const todoObj = { id: nanoid(), name: target.value, done: false }
        //将todoObj传递给App
        this.props.addTodo(todoObj)
        target.value = ''
    }
    
    render() {

        return (
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp}   type="text" placeholder="请输入你的任务名称，按回车键确认" />
                </div>
        )
    }
}
