import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import { Layout } from 'antd';
import Index from '../module/index/index';
import Music from '../module/music/index';
import Tools from '../module/tools/index';
import TodoList from '../module/todoList/index';
import Editor from '../module/editor/index';
import Album from '../module/album/index';
import './content.scss'
const { Content } = Layout;

class Main extends Component {
    constructor(){
        super();
        this.state = {
            collapsed: false,
        }
    }

    render(){
        return (
            <Content
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280,
                    }}
                >
                    <Route exact path="/index" component={Index}></Route>
                    <Route path="/index/music" component={Music}></Route>
                    <Route path="/index/tools" component={Tools}></Route>
                    <Route path="/index/todolist" component={TodoList}></Route>
                    <Route path="/index/editor" component={Editor}></Route>
                    <Route path="/index/album" component={Album}></Route>
                </Content>
        )
    }
}
export default Main;