import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
class Echarts extends Component {
    render() {
        var option = {
        backgroundColor:'#001529',  //图表背景颜色
        color:'#f60',
        title:{    //标题
            text:'2018年展示的数据',
            subtext:'某某公司利润季度分配',
            x:'center',
            textStyle:{   //主标题样式
                color:'#fff'
            },
            subtextStyle:{   //副标题样式
                color:'#fff'
            },
        },
        xAxis: {   //x轴
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月','七月'],
            axisLine:{   //X轴颜色
                lineStyle:{
                    color:'#fff'
                }
            }
        },
        yAxis: {  //y轴
            type: 'value',
            axisLine:{   //Y轴颜色
                lineStyle:{
                    color:'#fff'
                }
            }
        },
        grid:{  //间距
            left:'2%',
            right:'2%',
            bottom:'2%',
            containLabel:true
        },
        series: [{   //图表区数据
            //data: [20, 932, 901, 934, 890, 330],  //展示的数据
            data:this.props.echartData,
            type: 'bar'   //图表类型  line 折线图   bar 柱形图
        }]
    };
      return (
            <ReactEcharts
                  option={option}
                  style={{height: '232px', width: '100%'}}
                  className={'react_for_echarts'}
              />
      );
    }
  }
  
  export default Echarts;