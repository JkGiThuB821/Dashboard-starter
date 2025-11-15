import React from 'react'
import './CustomerReview.css'
import Chart from 'react-apexcharts'

const CustomerReview = () => {
    const data = {
        series: [{
          name: 'Reviews',
          data: [10, 15, 14, 20, 18, 25, 22],
        }],
        options: {
          chart: {
            type: 'area',
            height: 'auto',
          },
          fill: {
            colors: ['#fff'],
            type: 'gradient',
          },
          dataLabels: {
            enabled: false,
          },   
          stroke: {
            curve: 'smooth',
            colors: ['#fff'], 
            },
          tooltip: {
            x: { format: 'dd/MM/yy HH:mm' },
          },
          grid: {
            show: false,
          },
            xaxis: {
            type: 'datetime',
            categories: [ 
                "2023-09-19T00:00:00.000Z",
                "2023-09-20T01:30:00.000Z",
                "2023-09-21T02:30:00.000Z",
                "2023-09-22T03:30:00.000Z",
                "2023-09-23T04:30:00.000Z",
                "2023-09-24T05:30:00.000Z",
                "2023-09-25T06:30:00.000Z"
             ]
          },
          yaxis: {
            show: false,
        }, 
            toolbar: {
            show: true,
        },
      }
    };

  return (
    <div className="CustomerReview">
        <h3>Customer Reviews</h3>
        <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default CustomerReview
