import { useForm } from 'react-hook-form';
import MaxWidthWrapper from '../components/common/MaxWidthWrapper';
import Navbar from '../components/common/Navbar';
import vacImg1 from '../images/vacImg1.png';
import vacImg2 from '../images/vacImg2.png';
import vacImg3 from '../images/vacImg3.png';
import vacImg4 from '../images/vacImg4.png';
import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

const data = [
  {
    img: vacImg1,
    title: 'Stay Always Hydrated While Traveling',
    description:
      'Lorem ipsum dolor sit amet consectetur. Amet duis eget quam nunc pellentesque. Nisl metus.',
  },
  {
    img: vacImg2,
    title: 'Stay Always Hydrated While Traveling',
    description:
      'Lorem ipsum dolor sit amet consectetur. Amet duis eget quam nunc pellentesque. Nisl metus.',
  },
  {
    img: vacImg3,
    title: 'Stay Always Hydrated While Traveling',
    description:
      'Lorem ipsum dolor sit amet consectetur. Amet duis eget quam nunc pellentesque. Nisl metus.',
  },
  {
    img: vacImg4,
    title: 'Stay Always Hydrated While Traveling',
    description:
      'Lorem ipsum dolor sit amet consectetur. Amet duis eget quam nunc pellentesque. Nisl metus.',
  },
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

const VaccinationHub = () => {
  const [states, setStates] = useState([]);

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
      <MaxWidthWrapper>
        <h1 className='text-center text-2xl font-semibold my-10 font-playfair sm:text-3xl'>
          Community Vaccination Overview
        </h1>
      </MaxWidthWrapper>
      <section className='bg-secondary'>
        <MaxWidthWrapper className='py-10'>
          <h1 className='font-playfair text-white mb-9 text-2xl text-center font-medium sm:text-3xl'>
            Latest Updates
          </h1>
          <div className='flex flex-col gap-10 w-full sm:flex-row sm:gap-3'>
            {data.map((item, i) => {
              return (
                <div
                  className='bg-white w-full mx-auto sm:w-[35%] pb-5 rounded-b-xl h-full rounded-t-2xl sm:pb-3'
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
                    <button className='border-none text-sm rounded-md w-full'>
                      Read More
                    </button>
                  </aside>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className='py-10'>
        <h1 className='font-playfair mb-9 text-2xl text-center font-semibold sm:text-3xl'>
          Vaccination Tracker
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className='grid sm:grid-cols-3 gap-5 sm:gap-10'>
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
                <p className='text-red-500 text-sm'>{errors.gender.message}</p>
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
                <p className='text-red-500 text-sm'>{errors.endDate.message}</p>
              )}
            </label>
          </section>
          <div className='flex justify-end'>
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
      </MaxWidthWrapper>
    </div>
  );
};
export default VaccinationHub;
