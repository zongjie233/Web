import React, {FC, ReactElement, useCallback, useEffect, useReducer } from "react";
import TdItem from "./List/Item";
import TdInput from "./Input";
import TdList from "./List";
import { ACTION_TYPE, IState, ITodo } from "./typings";
import { todoReducer } from "./reducer";

const initialState: IState = {
    todoList:[]
};

const TodoList: FC = (): ReactElement => {
    
    //初始化状态
    // const [ todoList, setTodoList ] = useState<ITodo[]>([])

    const [state, dispatch] = useReducer(todoReducer, initialState )
    
    useEffect(() => {
        console.log(state.todoList);
    },[state.todoList])
    //useCallback???


    const addTodo = useCallback((todo: ITodo):void => {
    //    setTodoList(todoList => [todo,...todoList]
    //    )
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload:todo
        })
    }, [])
    
    const removeTodo = useCallback((id:number):void => {
        dispatch({
            type: ACTION_TYPE.REMOVE_TODO,
            payload:id
        })
    }, [])

    const toggleTodo = useCallback((id:number):void => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_TODO,
            payload:id
        })
    },[])
    
    return (
        <div className="todo-list">
            <TdInput
                addTodo={addTodo}
                todoList={state.todoList}
            />
            {/* 向TdList组件传递 */}
            <TdList
            todoList = {state.todoList}
            removeTodo = {removeTodo}
            toggleTodo = {toggleTodo}
            />
        </div>
    )
    
    }

export default TodoList