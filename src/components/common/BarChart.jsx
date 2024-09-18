import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const data1 = {
  labels: ['Vaccinated population', 'Unvaccinated population'],
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ['#53B6F9', '#FF3D00'],
    },
  ],
};

const data2 = {
  labels: ['0-5years', '0-5years', '6-15years', '6-15years'],
  datasets: [
    {
      data: [40, 72, 40, 40],
      backgroundColor: ['#FFC107', '#53B6F9', '#FF3D00', '#4CAF50'],
    },
  ],
};

const data3 = {
  labels: ['Male', 'Female'],
  datasets: [
    {
      data: [45, 135],
      backgroundColor: ['#53B6F9', '#FF3D00'],
    },
  ],
};

const options1 = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Vaccination by rate',
    },
  },
};
const options2 = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
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
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Vaccination rate gender',
    },
  },
};

// defaults.responsive = true;
// defaults.maintainAspectRatio = false;
// defaults.aspect

const BarChart = () => {
  return (
    <div className='grid gap-14 sm:grid-cols-3'>
      <section className='h-56'>
        <Bar data={data1} options={options1} />
      </section>
      <section>
        <Bar data={data2} options={options2} />
      </section>
      <section>
        <Bar data={data3} options={options3} />
      </section>
    </div>
  );
};
export default BarChart;
