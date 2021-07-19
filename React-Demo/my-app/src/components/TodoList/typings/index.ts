//定义接口数据类型
export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}
export interface IState {
  todoList: ITodo[];
}

export enum ACTION_TYPE {
  ADD_TODO = "addTodo",
  REMOVE_TODO = "removeTodo",
  TOGGLE_TODO = "toggleTodo",
}

export interface IAction {
  type: ACTION_TYPE;
  payload: ITodo | number;
}
