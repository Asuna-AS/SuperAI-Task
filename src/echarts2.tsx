import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const MyChartComponent2 = () => {
  useEffect(() => {
    const labelRight = {
        position: 'right'
      } as const;
    const chart = echarts.init(document.getElementById('myChart2'));
    const options = {
        
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            top: 80,
            bottom: 30
          },
          xAxis: {
            type: 'value',
            position: 'bottom',
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            }
          },
          yAxis: {
            type: 'category',
            axisLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            data: [
              
            ]
          },
          series: [
            {
              name: 'Cost',
              type: 'bar',
              color:['#5fcbc6'],
              stack: 'Total',
              label: {
                show: true,
                color: '#5fcbc6',
                formatter: '{c}',
                position: 'right'
              },
              data: [
                0.78,
                11.0,
                1.08,
                0.34,
                3.20,
                -7.90,
                2.04,
                -2.87,
                0.01
              ]
            }
          ]
    };
    chart.setOption(options);
    return () => {
      
    };
  }, []);

  return <div id="myChart2" style={{ width: '600px', height: '600px' }}></div>;
};

export default MyChartComponent2;
