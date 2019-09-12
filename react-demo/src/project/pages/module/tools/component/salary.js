import React from 'react'
import { Input,Icon } from 'antd';

export default class Salary extends React.Component {
    constructor(){
        super();
        this.state = {
            old1:'',
            old2:'',
            old3:''
        }
    }
    handleChange(e){
        let value = e.target.value;
        if(value > 10000){
            alert('工资破万了')
        }
        let old1 = value*0.08;
        let old2 = value*0.02;
        let old3 = value*0.01;
        this.setState({
            old1:old1,
            old2:old2,
            old3:old3
        })
    }
    render() {
        return (
            <div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="应发工资" addonAfter="￥" onChange={(e)=>this.handleChange(e)} />
              </div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="养老保险" addonAfter="￥" value={this.state.old1} readOnly/>
              </div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="医疗保险" addonAfter="￥" value={this.state.old2} disabled/>
              </div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="失业保险" addonAfter="￥" value={this.state.old3} disabled/>
              </div>
            </div>
        );
    }
}