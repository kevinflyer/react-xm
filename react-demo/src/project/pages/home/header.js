import React,{Component} from 'react'
import {Layout,Menu,Icon} from 'antd'
import './header.scss'

const SubMenu = Menu.SubMenu;
const {Header} = Layout;

class Top extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: sessionStorage.getItem("name") || 'admin',
        }
    }
    goBack(){
        sessionStorage.removeItem("name");
        this.props.history.push("/login")
    }
    render(){
        let {name} = this.state;
        return (
            <Header style={{background:'#fff'}}>
                <Icon className="trigger" type={this.props.collapsed? 'menu-unfold' : "menu-fold"}
                onClick={this.props.toggle}/>
                <Menu mode="horizontal" className="logOut">
                    <SubMenu title={<span><Icon type="user"/>{name}</span>}>
                        <Menu.Item key="logOut"><a onClick={()=>this.goBack()}>退出</a></Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        )
    }
}
export default Top;