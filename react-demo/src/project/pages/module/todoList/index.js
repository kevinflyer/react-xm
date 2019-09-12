import React from 'react';
import {connect} from 'react-redux';
import {add,del,addTodo,delTodo,changeTodo} from '../../../redux/actions/todoList'
import FilterLink from './filterLink'
import './index.scss'
//装饰器  连接
@connect (
    (state)=>({
        //test:state.abc,   //this.props store对象
        todoList:state.todoList,
        setVisibility:state.setVisibility
    })
)

class TodoList extends React.Component {
    // add(){
    //     console.log(1)
    //     if(!this.input.value) return;
    //     this.props.dispatch(add({
    //         text:this.input.value
    //     }))
    //     this.input.value = '';
    // }
    // del(){
    //     if(!this.input.value) return;
    //     this.props.dispatch(del({
    //         text:this.input.value
    //     }))
    //     this.input.value = '';
    // }
    addTodo(){
        var maxId = Math.max.apply(null,this.props.todoList.map(v=>{return v.id})) + 1;//apply返回一数组
        if(!this.input.value) return;
        this.props.dispatch(addTodo({
            id:maxId,
            name:this.input.value,
            check:false,
            type:'ADD_TODO'
        }))
        this.input.value = '';
    }
    delTodo(id){
        this.props.dispatch(delTodo({
            id:id,
            type:'DEL_TODO'
        }))
    }
    changeTodo(id){
        this.props.dispatch(changeTodo({
            id:id,
            type:'CHANGE_TODO'
        }))
    }
    render() {
        let {todoList,setVisibility} = this.props;
        let todos = todoList;
        if(setVisibility.filter === 'SHOW_COMPLETED') {
            todos = todoList.filter(t => t.check)
        } else if (setVisibility.filter === 'SHOW_ACTIVE') {
            todos = todoList.filter(t => !t.check)
        }                  //对待办事项不同显示的处理
        return (
            <div className="todo-box">
                <div className="todo-innerBox">
                    <div className="todo-tab">
                        <FilterLink filter="SHOW_ALL" name="全部任务" />
                        <FilterLink filter="SHOW_ACTIVE" name="待办任务" />
                        <FilterLink filter="SHOW_COMPLETED" name="已完成任务" />
                    </div>
                    <ul className="list-group">
                        {
                            todos.map(v=>{
                                return (
                                    <li className="todo-list_li" style={{textDecoration:v.check ? "line-through" : "none"}}>
                                        <input type="checkbox" className="check-box" checked={v.check} onClick={(id)=>this.changeTodo(v.id)}/>
                                        {v.name}
                                        <button className="todo-list_del" onClick={(id)=>this.delTodo(v.id)}>删除</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <input placeholder="你想做点什么" type="text" ref={dom => this.input = dom}/>
                    <button onClick={()=>this.addTodo()}>添加任务</button>
                    <br></br>
                    {/*<button onClick={()=>this.add()}>加</button>
                       <input type="text" ref={dom => this.input = dom}/>
                       <button onClick={()=>this.del()}>减</button> 
                       {this.props.test}*/}
                </div>
                
            </div>
        );
    }
}

export default TodoList;