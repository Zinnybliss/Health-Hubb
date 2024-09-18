import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Vaccinated population', 'Unvaccinated population'],
  datasets: [
    {
      label: 'Vaccination by rate',
      data: [60, 40],
      borderColor: '#53B6F9',
      backgroundColor: '#53B6F9',
    },
  ],
};

const data2 = {
  labels: ['0-5years', '0-5years', '6-15years', '6-15years'],
  datasets: [
    {
      label: 'Vaccination rate by age',
      data: [40, 72, 40, 40],
      borderColor: '#FFC107',
      backgroundColor: '#FFC107',
    },
  ],
};

const data3 = {
  labels: ['Male', 'Female'],
  datasets: [
    {
      label: 'Vaccination rate by gender',
      data: [45, 135],
      borderColor: '#FF3D00',
      backgroundColor: '#FF3D00',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  elements: {
    line: { tension: 0.5 },
  },
  plugins: {
    legend: {
      display: false,
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Vaccination by rate ',
    },
  },
};

const options2 = {
  responsive: true,
  maintainAspectRatio: true,
  elements: {
    line: { tension: 0.5 },
  },
  plugins: {
    legend: {
      display: false,
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Vaccination rate by age',
    },
  },
};

const options3 = {
  responsive: true,
  maintainAspectRatio: true,
  elements: {
    line: { tension: 0.5 },
  },
  plugins: {
    legend: {
      display: false,
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Vaccination rate by gender',
    },
  },
};

const LineGraph = () => {
  return (
    <div className='grid gap-10 sm:grid-cols-3'>
      <section>
        <Line data={data} options={options} />
      </section>
      <section>
        <Line data={data2} options={options2} />
      </section>
      <section>
        <Line data={data3} options={options3} />
      </section>
    </div>
  );
};
export default LineGraph;
