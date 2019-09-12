import React from 'react'
import {Input} from 'antd'

export default class House extends React.Component {
    constructor(){
        super();
        this.state = {
            time1:'',
            rent:'',
            time2:''
        }
    }
    handleChange(e){
        let value = e.target.value;
        let name = e.target.name;
        this.setState({
            [name]:value
        },()=>this.hanldRent())
    }
    hanldRent(){
        var rent = this.state.time1*this.state.time2;
        this.setState({
            rent:rent
        })
    }
    render() {
        return (
            <div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="预计租金" addonAfter="元/月" name="time1"
                        value={this.state.time1} onChange={(e)=>this.handleChange(e)}/>
              </div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="预计年数" addonAfter="年" name="time2"
                        value={this.state.time2} onChange={(e)=>this.handleChange(e)}/>
              </div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="租房合计" addonAfter="万" name="time1"
                        value={this.state.rent}/>
              </div>
              <div style={{marginBottom:16}}>
                <Input addonBefore="买房合计" addonAfter="万" name="time1"
                        value={this.state.old3}/>
              </div>
            </div>
        );
    }
}