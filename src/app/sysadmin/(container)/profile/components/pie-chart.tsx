"use client"

import React from 'react'
import dynamic from 'next/dynamic';

type Props = {}

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const DashboardPieChart: React.FC<Props> = () => {
    const chartOptions = {
      labels: ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'],
      colors: ['#c52233', '#a51c30', '#a7333f', '#74121D', '#580C1F'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val + " request";
          }
        }
      }
    };
  
    const chartSeries = [683, 1156, 300, 100, 777];
  
    return (
      <div style={{ minHeight: 300 }}>
        <ApexCharts
          type="pie"
          height={350}
          options={chartOptions}
          series={chartSeries}
        />
      </div>
    );
  }
  
  export default DashboardPieChart;
