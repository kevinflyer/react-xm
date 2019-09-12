import React from 'react'
//import {Table} from 'antd'
import fetchJsonp from 'fetch-jsonp'
import { Spin,Row,Col,Card } from 'antd';
const { Meta } = Card;

export default class Music extends React.Component {
    constructor(){
        super();
        this.state = {
            lists:[],
            lists2:[],
            lists3:[],
            loading:true, //加载动画
        }
    }
    getList(typeId){
        fetchJsonp(`http://tingapi.ting.baidu.com/v1/restserver/ting?xml&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${typeId}&size=100&offset=0`,{
            method:'get'
        }).then(response=> {
            return response.json()
        }).then(data => {
            console.log(JSON.stringify(data))
            const songArray = []
            let songList = data.song_list;
            for(let i=0; i< 11; i++){
                songArray.push({
                    title:songList[i].title,
                    author:songList[i].author,
                    country:songList[i].country,
                    language:songList[i].language,
                    publishtime:songList[i].publishtime,
                    pic_radio:songList[i].pic_radio,
                    artisit_name:songList[i].author
                })
            }
            if(typeId === '1'){
                this.setState({
                    lists:songArray,   //获取数据
                })
            }else if(typeId === '2'){
                this.setState({
                    lists2:songArray,   //获取数据
                    loading:false   //隐藏
                })
            }else{
                this.setState({
                    lists3:songArray,   //获取数据
                })
            }
            
        }).catch(error => {
            console.log(error)  //请求失败后的处理
        })
    }
    componentDidMount(){
        this.getList('1');
        this.getList('2');
        this.getList('6');
    }
    columns =()=> {
        return  [{
            dataIndex: 'rowIndex',
            title: '序号',
            width: 50,
        },{
            dataIndex: 'title',
            title: '歌曲名',
            width: 200,
        }, {
            dataIndex: 'author',
            title: '歌手',
            width: 200,
        }, {
            dataIndex: 'country',
            title: '发行国家',
            width: 150,
        }, {
            dataIndex: 'language',
            title: '语种',
            width: 200,
        }, {
            dataIndex: 'publishtime',
            title: '发行时间',
            width: 200,
        }];
    }
    rowSelection =()=> {
        return{
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
              },
              getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
              }),
        }
      };
    render() {
        const imgsTag = this.state.lists.map(v1 => (          
                        <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={v1.pic_radio} />} >
                        <Meta title={v1.title} description={v1.artisit_name} />
                        </Card>
        ))
        const imgsTag2 = this.state.lists2.map(v1 => (        
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={v1.pic_radio} />} >
            <Meta title={v1.title} description={v1.artisit_name} />
            </Card>
        ))
        const imgsTag3 = this.state.lists3.map(v1 => (          
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={v1.pic_radio} />} >
            <Meta title={v1.title} description={v1.artisit_name} />
            </Card>
        ))
        return (
            <div>
                <p>热歌榜：</p>
                <Spin spinning={this.state.loading}/>  
                    {!this.state.loading ?  
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            {imgsTag}
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            {imgsTag2}
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            {imgsTag3}
                        </Col>
                    </Row> : null}
            </div>
        )
    }
}

//<Table rowSelection={this.rowSelection()} columns={this.columns()} dataSource={this.state.lists.map((v,i)=>({...v,rowIndex:i+1}))} loading={this.state.loading} />