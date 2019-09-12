import React from 'react'
import {Row,Col,Card,Icon} from 'antd';
import Echarts from './echarts'

export default class Index extends React.Component {
    constructor(){
        super();
        this.state = {
            echartData:[1000, 932, 901, 934, 890, 330]
        }
    }
    // getList(){
    //     axios({
    //         method:'get',
    //         url:'http://localhost:3333/music_list'
    //     }).then(res=>{
    //         console.log(res.data.result);
    //         this.setState({echartData:res.data.result})
    //     })
    // }
    // componentDidMount(){
    //     this.getList()
    // }
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={5} type="flex" justify="space-between" align="bottom">
                    <Col xs={24} sm={24} md={12} lg={6}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="heart" className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">收藏</div>
                                        <h2>301</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="cloud" className="text-2x" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">云数据</div>
                                        <h2>30122</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="camera" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">照片</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="mail" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">邮件</div>
                                        <h2>102</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} lg={12}>
                    <div className="cloud-box">
                        <Card className={'no-padding'}>
                            <Echarts {...this.state}></Echarts>
                        </Card>
                    </div>
                    </Col>
                </Row>
            </div>
        );
    }
}