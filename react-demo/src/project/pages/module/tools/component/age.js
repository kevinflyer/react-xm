import React from 'react'
import { Row,Col,Input,Icon,Button } from 'antd';
//import { DatePicker } from 'antd';


export default class Age extends React.Component {
    constructor(){
        super();
        this.state = {
            year:'',
            month:'',
            day:'',
            old:''
        }
    }
    onchange(date, dateString) {
        console.log(date, dateString);
    }
    handleChange1(e){
        this.setState({
            year:e.target.value,
        })
    }
    handleChange2(e){
        this.setState({
            month:e.target.value,
        })
    }
    handleChange3(e){
        this.setState({
            day:e.target.value,
        })
    }
    fixnum(){
        console.log('2333');
        let old = Array();
        let years = this.state.year;
        let months = this.state.month;
        let days = this.state.day;
        var now = new Date();
        if(years !== ''){
            if(now.getFullYear() - years< 0){
                alert('您输入年份有误，请重新输入')
                //this.props.form.resetFields();
                return false;
            }
            old[0] = (now.getFullYear() - years);
        }else{
            old[0] = 0;
        }
        if(months !== ''){
            if(now.getMonth() - months + 1 < 0){
                years--;
                old[1] = (now.getMonth() - months + 1 + 30);
            }else{
                old[1] = (now.getMonth() - months + 1);
            }
        }else{
            old[1] = 0;
        }
        if(days !== ''){
            if(now.getDate() - days < 0){
                months--;
                old[2] = (now.getDate() - days + 30);
            }else{
                old[2] = (now.getDate() - days);
            }
        }else{
            old[2] = 0;
        }
        this.setState({
            old:old
        })
    }
    render() {
        return (
            <div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="出生年" addonAfter="年" value={this.state.year} onChange={(e)=>this.handleChange1(e)} />
              </div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="出生月" addonAfter="月" value={this.state.month} onChange={(e)=>this.handleChange2(e)}/>
              </div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="出生日" addonAfter="日" value={this.state.day} onChange={(e)=>this.handleChange3(e)}/>
              </div>
              <div style={{marginBottom:16}}>
              <Button type="primary" size='small' onClick={(e)=>this.fixnum(e)}>提交计算</Button>
              </div>
              <div style={{marginBottom:16}}>
                <Row>
                <Col span={8}><Input addonBefore="你今年的岁数" addonAfter="岁零" value={this.state.old[0]} disabled/></Col>
                <Col span={8}><Input addonAfter="月零" value={this.state.old[1]} disabled/></Col>
                <Col span={8}><Input addonAfter="日" value={this.state.old[2]} disabled/></Col>
                </Row>
              </div>
            </div>
        );
    }
}

// <DatePicker onChange={(e)=>this.onchange(e)} />
// <br />