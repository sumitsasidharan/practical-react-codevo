import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
   const data = {
      labels: ['Jan', 'Feb', 'March', 'April', 'May'],
      datasets: [
         {
            label: 'Sales for 2020 (M)',
            data: [3, 2, 2, 4, 5]
         },
         {
            label: 'Sales for 2019 (M)',
            data: [2, 1, 3, 5, 4]
         },
      ]
   }
  return (
     <div>
        <h1>LineChart</h1>

        <div style={{ width: '720px', height: '800px' }}>
           <Line data={data} />
        </div>
     </div>
  );
}

export default LineChart