import React from 'react'
import { Tabs } from 'antd';

import Salary from './component/salary'
import House from './component/house'
import Bmi from './component/bmi'
import Age from './component/age'
const { TabPane } =Tabs;

export default class Tools extends React.Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="3">
                    <TabPane tab="工资帽" key="1">
                        <Salary />
                    </TabPane>
                    <TabPane tab="小房租" key="2">
                        <House />
                    </TabPane>
                    <TabPane tab="身体指数" key="3">
                        <Bmi />
                    </TabPane>
                    <TabPane tab="多大了" key="4">
                        <Age />
                    </TabPane>
                    <TabPane tab="施工中" disabled key="5">
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}