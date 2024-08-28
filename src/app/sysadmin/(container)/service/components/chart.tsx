"use client"

import React from 'react'
import dynamic from 'next/dynamic';

type Props = {}

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const DashboardRequestChart: React.FC<Props> = () => {
  const chartOptions = {
    
    plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    colors: ['#E39695', '#ff0000'],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          show: true,
          style: {
            colors: '#070707', // Change this to your desired x-axis label color
          }
        },
        axisBorder: {
          show: true,
          color: '#070707', // Change this to your desired x-axis color
        },
        axisTicks: {
          show: true,
          color: '#070707', // Change this to your desired x-axis tick color
        }
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: '#070707', // Change this to your desired y-axis label color
          }
        },
        title: {
          style: {
            color: '#070707' // Change this to your desired y-axis title color
          }
        },
        axisBorder: {
          show: true,
          color: '#070707', // Change this to your desired y-axis color
        },
        axisTicks: {
          show: true,
          color: '#070707', // Change this to your desired y-axis tick color
        }
      },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + " tickets";
        }
      }
    }
  };

  const chartSeries = [
    {
      name: 'Manpower Service',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 65, 68, 64]
    },
    {
      name: 'Cleaning Request',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 101, 102]
    }
  ];

  return (
    <div style={{ minHeight: 300 }}>
      <ApexCharts
        type="bar"
        height={350}
        options={chartOptions}
        series={chartSeries}
      />
    </div>
  );
}

export default DashboardRequestChart;
