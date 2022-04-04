import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const data = {
  labels: [
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Noz',
    'Dec',
    'Jan',
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.01,
      backgroundColor: '#00ff1a',
      borderColor: '#00ff1a',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#00ff1a',
      pointBackgroundColor: '#00ff1a',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#00ff1a',
      pointHoverBorderColor: '#00ff1a',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [40, 45, 40, 50, 70, 72, 50, 50, 55, 70],
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

import React from 'react'

const PortfolioChart = () => {
  return <Line data={data} options={options} width={400} height={150} />
}

export default PortfolioChart
