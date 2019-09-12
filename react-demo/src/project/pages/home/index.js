import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout,Menu,Icon,Switch} from 'antd';
import Top from './header'
import Main from './content'
import Bottom from './footer'
import {allMenu} from '../../public/menu'
import './index.scss'

const {Sider} = Layout;
const {SubMenu} = Menu;

class Home extends Component {
    constructor(){
        super();
        this.state = {
            theme:'dark',  //个性化，深浅切换
            collapsed:false
        }
    }
    toggle = () =>{
        this.setState({
            collapsed:!this.state.collapsed
        })
    };
    changeTheme = (value) => {
        this.setState({
            theme:value ? 'dark' : 'light'
        })
    }
    render(){
        return (
            <Layout className="containAll">
                <Sider collapsible collapsed={this.state.collapsed} 
                onCollapse={this.onCollapse} className="leftMenu">
                {this.state.theme === 'light' ? 
                    <a href="#" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github" /></a> :
                    <a href="#" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github white" /></a> }
                    {this.state.theme === 'light' ? <span className="author">个人小窝</span>:<span className="author white">个人小窝</span>}
                    <Menu theme={this.state.theme} mode="inline" defaultSelectedKeys={['index']} className="menu">
                        {
                            allMenu.map((v,i) => {
                                if(v.children && v.children.length>0){
                                    return (
                                        <SubMenu key={v.url} title={<span><Icon type={v.icon}/><span>{v.name}</span></span>}>
                                            {
                                                v.children.map((sub,j)=>{
                                                    return <Menu.Item key={sub.url}><Link to={"/index/"+sub.url}>{sub.name}</Link></Menu.Item>
                                                })
                                            }
                                        </SubMenu>
                                    )
                                }
                                return (
                                    <Menu.Item key={v.url}>
                                        <Link to={`/${v.url}`}>
                                            <Icon type={v.icon}/>
                                            <span>{v.name}</span>
                                        </Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                    <div className="switch">
                        <Switch
                        checked={this.state.theme === 'dark'}
                        onChange={this.changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                        />
                    </div>
                </Sider>
                <Layout>
                    <Top toggle={this.toggle} collapsed={this.state.collapsed} history={this.props.history}></Top>
                    <Main></Main>
                    <Bottom style={{textAlign:'center'}}></Bottom>
                </Layout>
            </Layout>
        )
    }
}
export default Home;