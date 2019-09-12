import React from 'react'
import {Layout} from 'antd'
import './footer.scss'

const {Footer} = Layout

export default class Bottom extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            time:0,
            name:sessionStorage.getItem("name") || 'admin'
        }
    }
    componentDidMount() {   //挂载完成
        this.timer = setInterval(()=>{
            this.setState({
                time:this.state.time+1
            })
        },1000)
    }
    componentWillUnmount() {  //组件销毁
        clearInterval(this.timer)
    }

    render(){
        let {time,name} = this.state;
        return (
            <Footer className="bottom animated bounceInLeft" style={{position:"absolute",bottom:'0px',left:"600px"}}>
                <div className="text">
                    <div>
                    <span className="me">{name}</span>
                    <span className="stay">您已在小窝里逗留了 {time}<span className="time">{this.state.timer}</span> 秒</span>
                    </div>
                </div>
            </Footer>
        )
    }
}