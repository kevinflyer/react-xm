import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './pages/login/index'
import Index from './pages/home/index'
//BrowerRouter 是一个容器（对象） 用来存放route link
//Router 是一个容器，包裹Route
//Route 显示视图 三大 props
//location 路由的位置信息 location.hash location.pathname
//history history.go() history.push()
//match 匹配路径参数

//Link 链接跳转
//Redirect 重定向

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/index" component={Index}></Route>
                    {/*<Redirect from="/" to="/Login"></Redirect>*/}
                    <Route exact path="/" component={Login}></Route>
                </div>
            </Router>
        )
    }
}
export default Routes;