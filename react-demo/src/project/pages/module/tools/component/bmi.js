import React from 'react'
import { Input,Icon } from 'antd';
export default class Bmi extends React.Component {
    constructor(){
        super();
        this.state = {
            height:'',
            weight:'',
            scale:''
        }
    }
    handleChange1(e){
        let value = parseFloat(e.target.value);
        let weight = parseInt(this.state.weight);
        let scale = 0;
        if(this.state.weight !== ''){
            scale = ((weight/value)/value).toFixed(2);
            console.log(scale)
        }
        this.setState({
            height:value,
            scale:scale
        })
    } 
    handleChange2(e){
        let value = parseInt(e.target.value);
        let height = parseFloat(this.state.height);
        let scale = 0;
        if(value > 800){
            alert('请输入正确的数值')
        }
        if(this.state.height !== ''){
            scale = ((value/height)/height).toFixed(2);
            console.log(scale)
        }
        this.setState({
            weight:value,
            scale:scale
        })
    }
    render() {
        const numbers = ['<=18.5 偏轻', '18.5-23.9 正常', '24.0-27.9 偏胖', '>=28.0 超重'];
        const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
        );
        return (
            <div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="身高" addonAfter="m" onChange={(e)=>this.handleChange1(e)} />
              </div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="体重" addonAfter="Kg" onChange={(e)=>this.handleChange2(e)} />
              </div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="身体指数" addonAfter="" value={this.state.scale} disabled/>
              </div>
              <ul>{listItems}</ul>
            </div>
        );
    }
}