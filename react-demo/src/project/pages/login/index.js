import React,{Component} from 'react';
import {Form,Icon,Input,Button,notification} from 'antd';
import './index.css'

class LoginPage extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
handleSubmit = e => {
    e.preventDefault();
    let _name = this.props.form.getFieldsValue().username;
    let _psd = this.props.form.getFieldsValue().password;
    console.log(_name);
    this.props.form.validateFields((err,values) => {
        if(err) {
            return;
        }else{
            if(_name === '123' && _psd === '123'){
                //跳转
                sessionStorage.setItem('name',_name);
                this.props.history.push("/index");
            }else {
                //提示
                this.openNotificationWithIcon('info')
            }
        }
    })
}
    //弹框提示
    openNotificationWithIcon = type => {
        return notification[type]({
            message:'用户名&密码',
            description:'123',
            icon:<Icon type="smile" style={{color:'#108ee9'}} />           
        })
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="container">
                <div className="box">
                    <p>请输入用户名和密码：</p>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username',{
                                rules:[{required:true,message:'请输入用户名'}]
                            })(
                                <Input
                                    prefix={<Icon type="github" style={{color:'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password',{
                                rules:[{required:true,message:'请输入密码'}]
                            })(
                                <Input
                                    type="password" prefix={<Icon type="eye-invisible" style={{color:'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
const Login = Form.create()(LoginPage);
export default Login;