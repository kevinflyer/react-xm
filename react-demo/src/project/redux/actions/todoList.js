import { createAction } from 'redux-actions'

//redux-actions框架提供了两个常用的API函数  
//createAction  创建action工厂的一个操作，返回一个action工厂。
// export const add= createAction('ADD');
// export const del= createAction('DEL');

export const addTodo= createAction('ADD_TODO');
export const delTodo= createAction('DEL_TODO');
export const changeTodo= createAction('CHANGE_TODO');

export const setVisibility = createAction('SET_VISIBILITY')
