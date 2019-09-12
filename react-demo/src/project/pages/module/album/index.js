import React from 'react'
import { Row, Col, Card, BackTop,Collapse } from 'antd';
const Panel = Collapse.Panel;

export default class Album extends React.Component {
    render(){
        let images = [
            [
                [require('../../../images/0.jpg'),'骑行time'],
                [require('../../../images/1.jpg'),'丝绸之路'],
                [require('../../../images/2.jpg'),'花语'],
                [require('../../../images/3.jpg'),'雪国'],
                [require('../../../images/4.jpg'),'朝阳'],
            ],
            [
                [require('../../../images/10.jpg'),'朝霞'],
                [require('../../../images/11.jpg'),'人在旅途'],
                [require('../../../images/12.jpg'),'直挂云帆济沧海'],
                [require('../../../images/13.jpg'),'向日葵'],
                [require('../../../images/14.jpg'),'桌面背景']
            ],
            [
                [require('../../../images/5.jpg'),'大凉山风景区'],
                [require('../../../images/6.jpg'),'向日葵'],
                [require('../../../images/7.jpg'),'桌面背景'],
                [require('../../../images/8.jpg'),'纯蓝'],
                [require('../../../images/9.jpg'),'纯蓝2'],
            ],
            [
                [require('../../../images/15.jpg'),'纯蓝'],
                [require('../../../images/16.jpg'),'纯蓝2'],
                [require('../../../images/17.jpg'),'朝霞'],
                [require('../../../images/18.jpg'),'人在旅途'],
                [require('../../../images/19.jpg'),'直挂云帆济沧海'],
            ]
        ];

        const imgsTag = images.map(v1 => (
            v1.map(v2 => (
                <div className="cloud-box">
                   <Card bordered={true} bodyStyle={{ padding:0 }}>
                        <div>
                            <img alt="example" width="100%" src={v2[0]} />
                        </div>
                        <div className="pa-m">
                            <h3>{v2[1]}</h3>
                            <small><a target="_blank">https://image.baidu.com/</a></small>
                        </div>
                   </Card> 
                </div>
            ))
        ))
        return (
            <div>
               <Row gutter={10}>
                    <Col span={6}>
                        {imgsTag[0]}
                    </Col>
                    <Col span={6}>
                        {imgsTag[1]}
                    </Col>
                    <Col span={6}>
                        {imgsTag[2]}
                    </Col>
                    <Col span={6}>
                        {imgsTag[3]}
                    </Col>
                </Row>
            </div>
        )
    }
}