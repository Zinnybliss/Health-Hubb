import { useEffect, useState } from 'react';
import Footer from '../components/common/Footer';
import MaxWidthWrapper from '../components/common/MaxWidthWrapper';
import Navbar from '../components/common/Navbar';
import { useForm } from 'react-hook-form';
import { cn } from '../../lib/utils';
import { Bar, Line, Pie } from 'react-chartjs-2';
import vacImg1 from '../images/vaccImg1.png';
import vacImg2 from '../images/vaccImg2.png';
import vacImg3 from '../images/vaccImg3.png';
import vacImg4 from '../images/vaccImg4.png';
import vacImg5 from '../images/vaccImg5.png';
import vacImg6 from '../images/vaccImg6.png';
import { BiSearch } from 'react-icons/bi';

const data = [
  {
    img: vacImg1,
    title:
      'The Importance of Community Health Data: How It Impacts Your Well-Being',
    description:
      "In today's interconnected world, community health data plays a vital role in enhancing individual...",
  },
  {
    img: vacImg2,
    title: 'Understanding Vaccination: Myths vs. Facts',
    description:
      'Vaccination is one of the most effective public health measures, yet misinformation continues to ...',
  },
  {
    img: vacImg3,
    title: 'A Step-by-Step Guide to Keeping Your Health Records Organised',
    description:
      'Vaccination is one of the most effective public health measures, yet misinformation continues to ...',
  },
  {
    img: vacImg4,
    title: 'The Role of Technology in Modern Health Monitoring',
    description:
      'The rise of technology has transformed the way we monitor and manage our health...',
  },
  {
    img: vacImg5,
    title: 'Promoting Health in Your Community: Easy Ways to Get Involved',
    description:
      'Here are some easy ways to promote health in your community and contribute to a healthier ...',
  },
  {
    img: vacImg6,
    title: 'Stay Always Hydrated While Traveling',
    description:
      'Travel can often disrupt your normal routine, leading to dehydration, which may cause ...',
  },
];

const commonIllnessDesktop = [
  'Malaria',
  'HIV/AIDS',
  'Diarrhoeal Diseases',
  'Respiratory Infections (Pneumonia, Tuberculosis)',
  'Lassa Fever',
  'Dengue Fever',
  'Hepatitis B',
  'Meningitis',
  'Measles',
  'Yellow Fever',
  'Sickle Cell Disease',
  'Diabetes',
  'Hypertension',
  'Cholera',
  'Typhoid Fever',
];
const commonIllnessMobile = [
  'Dengue Fever',
  'Hepatitis B',
  'Meningitis',
  'Measles',
  'Yellow Fever',
  'Cholera',
];

const ageRanges = [
  '15-19',
  '20-24',
  '25-29',
  '30-34',
  '35-39',
  '40-44',
  '45-49',
  '50-54',
  '55-59',
  '60-64',
  '65-69',
  '70-74',
  '75-79',
  '80-84',
  '85-89',
  '90+',
];

const HealthHub = () => {
  const [states, setStates] = useState([]);
  const [chart, setChart] = useState('Pie Chart');

  const fetchStates = async () => {
    try {
      const res = await fetch('https://nga-states-lga.onrender.com/fetch');
      const data = await res.json();
      setStates(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission
    console.log(data);

    reset();
  };

  return (
    <div>
      <Navbar />
      <MaxWidthWrapper className='mb-16'>
        <h1 className='text-center text-2xl font-semibold my-10 font-playfair sm:text-3xl'>
          Health Hub
        </h1>

        <section className='flex flex-col gap-10 sm:flex-row items-center mb-16 sm:gap-0'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full mt-5 bg-gradient-to-b from-secondary to-white p-5 rounded-lg sm:w-1/3'
          >
            <p className='mb-5 text-center text-lg font-medium'>Filter Panel</p>
            <section className='grid gap-5 w-full'>
              <label htmlFor='state' className='flex flex-col w-full gap-2'>
                <p className='font-medium'>State</p>
                <select
                  {...register('state', {
                    required: 'State is required',
                  })}
                  className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                >
                  <option value=''>Select State</option>
                  {states.map((state) => {
                    return (
                      <option value={state} key={state}>
                        {state}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label htmlFor='localGovt' className='flex flex-col w-full gap-2'>
                <p className='font-medium'>L.G.A</p>
                <input
                  type='text'
                  placeholder=''
                  {...register('localGovt', {
                    required: 'This field is required',
                  })}
                  className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                />

                {errors.localGovt?.type === 'required' && (
                  <p className='text-red-500 text-sm'>
                    {errors.localGovt.message}
                  </p>
                )}
              </label>
              <label htmlFor='gender' className='flex flex-col w-full gap-2'>
                <p className='font-medium'>Gender</p>
                <select
                  {...register('gender', {
                    required: 'Gender is required',
                  })}
                  className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                >
                  <option value=''>Select Gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
                {errors.gender?.type === 'required' && (
                  <p className='text-red-500 text-sm'>
                    {errors.gender.message}
                  </p>
                )}
              </label>

              <label htmlFor='ageRange' className='flex flex-col w-full gap-2'>
                <p className='font-medium'>Age Range</p>
                <select
                  {...register('ageRange', {
                    required: 'This field is required',
                  })}
                  className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                >
                  <option value=''>Select Age Range</option>
                  {ageRanges.map((ageRange) => {
                    return (
                      <option value={ageRange} key={ageRange}>
                        {ageRange}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label htmlFor='startDate' className='flex flex-col w-full gap-2'>
                <p className='font-medium'>Start Date</p>
                <input
                  type='date'
                  {...register('startDate', {
                    required: 'This field is required',
                  })}
                  className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                />

                {errors.startDate?.type === 'required' && (
                  <p className='text-red-500 text-sm'>
                    {errors.startDate.message}
                  </p>
                )}
              </label>
              <label htmlFor='endDate' className='flex flex-col w-full gap-2'>
                <p className='font-medium'>End Date</p>
                <input
                  type='date'
                  {...register('endDate', {
                    required: 'This field is required',
                  })}
                  className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                />

                {errors.endDate?.type === 'required' && (
                  <p className='text-red-500 text-sm'>
                    {errors.endDate.message}
                  </p>
                )}
              </label>
            </section>

            <div className='flex mt-6 justify-center'>
              <button
                type='submit'
                className={cn('py-1 text-sm rounded-md', {
                  'disabled:cursor-wait': isSubmitting,
                })}
              >
                Continue
              </button>
            </div>
          </form>

          <div className='w-full sm:w-2/3'>
            <h1 className='font-playfair mb-9 text-xl text-center font-medium'>
              Data visualization
            </h1>
            <div className='flex items-center justify-center gap-3'>
              <div
                className={cn(
                  'text-primary bg-transparent py-1 rounded-none p-0 pr-3 ml-3 focus:outline-none cursor-pointer',
                  chart === 'Pie Chart' && 'border-b border-b-primary py-1'
                )}
                onClick={() => setChart('Pie Chart')}
              >
                Pie Chart
              </div>
              <hr className='border-r border-r-primary h-5' />

              <div
                className={cn(
                  'text-primary bg-transparent py-1 rounded-none p-0 pr-3 ml-3 focus:outline-none cursor-pointer',
                  chart === 'Bar Chart' && 'border-b border-b-primary py-1'
                )}
                onClick={() => setChart('Bar Chart')}
              >
                Bar Chart
              </div>
              <hr className='border-r border-r-primary h-5' />
              <div
                className={cn(
                  'text-primary bg-transparent py-1 rounded-none p-0 pr-3 ml-3 focus:outline-none cursor-pointer',
                  chart === 'Line Graph' && 'border-b border-b-primary py-1'
                )}
                onClick={() => setChart('Line Graph')}
              >
                Line Graph
              </div>
            </div>

            <section className='mt-14 w-full mx-auto sm:w-1/2'>
              {chart === 'Pie Chart' && (
                <section className='h-[30rem] flex flex-col gap-5'>
                  <Pie
                    data={{
                      labels: [
                        '0-10years',
                        '11-20years',
                        '21-30years',
                        '31years and above',
                      ],
                      datasets: [
                        {
                          label: 'Vaccination by age',
                          data: [40, 72, 40, 40],
                          backgroundColor: [
                            '#FFC107',
                            '#53B6F9',
                            '#FF3D00',
                            '#4CAF50',
                          ],
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: true,
                      plugins: {
                        legend: {
                          display: true,
                          position: 'bottom',
                        },
                      },
                    }}
                  />
                  <p className='text-center'>
                    Vaccination rate by Age Range for the last 6 months in
                    Oluyole LGA
                  </p>
                </section>
              )}
              {chart === 'Bar Chart' && (
                <section className='h-[30rem] flex flex-col gap-5'>
                  <Bar
                    className='h-[30rem]'
                    data={{
                      labels: [
                        '0-10years',
                        '11-20years',
                        '21-30years',
                        '31years and above',
                      ],
                      datasets: [
                        {
                          data: [40, 72, 40, 40],
                          backgroundColor: [
                            '#FFC107',
                            '#53B6F9',
                            '#FF3D00',
                            '#4CAF50',
                          ],
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: true,
                      plugins: {
                        legend: {
                          display: false,
                        },
                        title: {
                          display: false,
                        },
                      },
                    }}
                  />
                  <p className='text-center'>
                    Vaccination rate by Age Range for the last 6 months in
                    Oluyole LGA
                  </p>
                </section>
              )}
              {chart === 'Line Graph' && (
                <section className='h-[30rem] flex flex-col gap-5'>
                  <Line
                    data={{
                      labels: [
                        '0-10years',
                        '11-20years',
                        '21-30years',
                        '31years and above',
                      ],
                      datasets: [
                        {
                          label: 'Vaccination rate by age',
                          data: [40, 72, 40, 40],
                          borderColor: '#FFC107',
                          backgroundColor: '#FFC107',
                        },
                      ],
                    }}
                    options={{
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
                          display: false,
                        },
                      },
                    }}
                  />
                  <p className='text-center'>
                    Vaccination rate by Age Range for the last 6 months in
                    Oluyole LGA
                  </p>
                </section>
              )}
            </section>
          </div>
        </section>

        <article className='mt-10'>
          <h1 className='font-playfair mb-3 text-2xl text-center font-bold'>
            Common Illness
          </h1>
          <p className='text-center mb-6'>
            Below are list of common illnesses that you might be interested in
            learning more abut, click on them to learn more about them.
          </p>
          <ul className='hidden w-full mx-auto sm:grid gap-4 sm:grid-cols-3 sm:w-4/5'>
            {commonIllnessDesktop.map((item, i) => {
              return (
                <li key={i} className='ml-10 list-disc'>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className='w-full mx-auto grid gap-4 sm:grid-cols-3 sm:w-4/5 sm:hidden'>
            {commonIllnessMobile.map((item, i) => {
              return (
                <li key={i} className='ml-10 list-disc'>
                  {item}
                </li>
              );
            })}
          </ul>
        </article>
      </MaxWidthWrapper>
      <aside className='mt-32 mb-56'>
        <h1 className='font-playfair mb-8 text-2xl text-center font-bold'>
          Vaccination Information
        </h1>
        <div className=' w-full bg-secondary px-5 py-20 sm:px-40'>
          <header className='flex justify-between items-center'>
            <h1 className='text-white text-lg font-medium font-playfair'>
              Vaccination Types
            </h1>
            <form className='sm:ml-8 w-44 rounded-md py-1 px-3 bg-white sm:w-96'>
              <label
                htmlFor='search'
                className='flex justify-between items-center gap-3'
              >
                <input
                  type='text'
                  id='search'
                  placeholder='Search by Vaccine name or disease'
                  className='bg-transparent w-full border-none outline-none focus:outline-none text-darkgray'
                />
                <BiSearch className='text-tertiary text-xl' />
              </label>
            </form>
          </header>
          <section className='grid gap-5 mt-10 sm:grid-cols-3'>
            {data.map((item, i) => {
              return (
                <div
                  className='bg-white w-full pb-5 rounded-2xl h-full sm:pb-3'
                  key={i}
                >
                  <img
                    src={item.img}
                    alt='Patience Image'
                    className='h-48 w-full rounded-t-2xl'
                  />
                  <aside className='pt-5 px-5'>
                    <h4 className='font-bold mb-3'>{item.title}</h4>
                    <p className='text-sm mb-4'>{item.description}</p>
                    <a href='#' className='font-medium text-primary italic'>
                      Read More
                    </a>
                  </aside>
                </div>
              );
            })}
          </section>
        </div>
      </aside>

      <Footer />
    </div>
  );
};
export default HealthHub;
