import React,{useRef,FC, ReactElement} from "react";
import TodoList from "..";
import { ITodo } from "../typings";

//函数组件最基本写法
interface IProps {
    addTodo: (todo: ITodo) => void;
    todoList: ITodo[];
 }

const TdInput: FC<IProps> = ({
    addTodo,
    todoList
}) :ReactElement => {

    //通过useRef获取输入框内的值
    const inputRef = useRef<HTMLInputElement>(null)
    const addItem = (): void => {

        //trim??,数据处理与判断
        const val:string = inputRef.current!.value.trim()
        if (val.length) {
            //判断列表中是否存在重复项
            const isExist = todoList.find(todo => todo.content === val)
            
            if (isExist) {
                alert('已经存在该项任务');
                return;
            }

            addTodo({
                id: new Date().getTime(),
                content: val,
                completed: false
            });

        }
    }

    return (
        <div className="todo-input">
            <input type="text" placeholder="请输入代办项" ref={inputRef} />
            <button onClick={addItem}>增加</button>
        </div>
    )
    
}
export default TdInput