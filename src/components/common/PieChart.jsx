import { Doughnut, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const doughnutdata = {
  labels: ['Vaccinated population', 'Unvaccinated population'],
  datasets: [
    {
      label: 'Vaccination Rate',
      data: [60, 40],
      backgroundColor: ['#53B6F9', '#FF3D00'],
    },
  ],
};

const doghnutOptions = {
  responsive: true,
  cutout: `80%`,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Vaccination by rate',
    },
  },
};

const pieOptions1 = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Vaccination rate by age',
    },
  },
};

const pieOptions2 = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Vaccination rate by gender',
    },
  },
};

const piedata1 = {
  labels: ['0-5years', '0-5years', '6-15years', '6-15years'],
  datasets: [
    {
      label: 'Vaccination by age',
      data: [40, 72, 40, 40],
      backgroundColor: ['#FFC107', '#53B6F9', '#FF3D00', '#4CAF50'],
    },
  ],
};

const piedata2 = {
  labels: ['Male', 'Female'],
  datasets: [
    {
      label: 'Vaccination by gender',
      data: [45, 135],
      backgroundColor: ['#53B6F9', '#FF3D00'],
    },
  ],
};

const PieChart = () => {
  return (
    <div className='grid gap-14 sm:grid-cols-3'>
      <section>
        <Doughnut data={doughnutdata} options={doghnutOptions} />
      </section>
      <section>
        <Pie data={piedata1} options={pieOptions1} />
      </section>
      <section>
        <Pie data={piedata2} options={pieOptions2} />
      </section>
    </div>
  );
};
export default PieChart;
