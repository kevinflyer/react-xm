import React from 'react'
import {Table} from 'antd'
//import axios from 'axios'
//import {get} from '../../../public/ajax';
 
export default class Music extends React.Component {
    constructor(){
        super();
        this.state = {
            lists:[]
        }
    }
    // getList(){
    //     get('/music_list').then((res)=>{
    //         this.setState({lists:res.data.result})
    //     })
    // }
    // componentDidMount(){
    //     this.getList()
    // }
    dataSource=()=>{
        return [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
            },
            {
              key: '4',
              name: 'Disabled User',
              age: 99,
              address: 'Sidney No. 1 Lake Park',
            },
          ];
    }
    columns =()=> {
        return [
            {
                title: 'Name',
                dataIndex: 'name',
                render: text => <a href="javascript:;">{text}</a>,
              },
              {
                title: 'Age',
                dataIndex: 'age',
              },
              {
                title: 'Address',
                dataIndex: 'address',
              }, 
        ]
    }
    rowSelection =()=> {
        return{
            onChange:(selectedRowKeys,selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
            },
            getCheckboxProps:record => ({
                disabled:record.name === 'Disabled User',
                name:record.name
            })
        }
    }
    render() {
        return (
            <div>
                <Table rowSelection={this.rowSelection()} columns={this.columns()} dataSource={this.dataSource()} />
            </div>
        );
    }
}