//创建外壳组件App
import React from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'
//创建并暴露app组件
export default class App extends React.Component{
    render() {
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
           
        )
    }
}
