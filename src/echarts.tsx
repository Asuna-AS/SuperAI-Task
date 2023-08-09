import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const MyChartComponent = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById('myChart'));
    const options = {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['Product', 'Office of CEO', 'Marketing', 'Customer Support', 'Finance', 'HR', 'IT', 'Sales', 'Operations']

      },
      series: [
        {
          name: 'High Performer Resignation Rates',
          type: 'bar',
          color: [
            '#0D97FF'
          ],
          data: [9.37, 11, 11.9, 12.3, 12.5, 12.9, 13.7, 15.3, 16.6],
          label:{
            show: true,
            position: 'right',
            color: '#0D97FF'
          }
        },
        {
          name: 'Overall Resignation Rates',
          type: 'bar',
          // colour:#FE5000,
          color: [
            '#FE5000'
          ],
          data: [8.59, 0, 10.9, 12, 9.27, 20.8, 11.6, 18.1, 16.6],
          label:{
            show: true,
            position: 'right',
            color: '#FE5000'
          }
        }
        
      ]
    };
    chart.setOption(options);
    return () => {
      // chart.dispose();
    };
  }, []);

  return <div id="myChart" style={{ width: '600px', height: '600px' }}></div>;
};

export default MyChartComponent;
