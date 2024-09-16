import { useForm } from 'react-hook-form';
import { cn } from '../../../lib/utils';

const HealthInfo = () => {
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
    <div className='mt-5'>
      <header>
        <h1 className='text-lg font-medium'>Health Metrics</h1>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col my-10 gap-10'
      >
        <section className='flex w-full flex-col gap-6 sm:flex-row sm:gap-14 sm:ml-3'>
          <div className='w-full flex flex-col gap-6'>
            <label htmlFor='weight' className='flex flex-col w-full gap-2'>
              <p className='font-medium'>Weight</p>
              <input
                type='text'
                {...register('weight', {
                  required: 'This field is required',
                })}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.weight?.type === 'required' && (
                <p className='text-red-500 text-sm'>{errors.weight.message}</p>
              )}
            </label>
            <label
              htmlFor='bloodPressure'
              className='flex flex-col w-full gap-2'
            >
              <p className='font-medium'>Blood Pressure</p>
              <input
                type='text'
                {...register('bloodPressure', {
                  required: 'This field is required',
                })}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.bloodPressure?.type === 'required' && (
                <p className='text-red-500 text-sm'>
                  {errors.bloodPressure.message}
                </p>
              )}
            </label>
          </div>

          <div className='w-full flex flex-col gap-6'>
            <label htmlFor='height' className='flex flex-col w-full gap-2'>
              <p className='font-medium'>Height</p>
              <input
                type='text'
                {...register('height', {
                  required: 'This field is required',
                })}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.height?.type === 'required' && (
                <p className='text-red-500 text-sm'>{errors.height.message}</p>
              )}
            </label>
            <label htmlFor='others' className='flex flex-col gap-2'>
              <p className='font-medium'>Others</p>
              <input
                type='text'
                {...register('others')}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
            </label>
          </div>
        </section>

        <h1 className='text-lg font-medium'>Medical History</h1>

        <section className='flex w-full flex-col gap-6 sm:flex-row sm:gap-14 sm:ml-3'>
          <div className='w-full flex flex-col gap-6'>
            <label
              htmlFor='chronicConditions'
              className='flex flex-col w-full gap-2'
            >
              <p className='font-medium'>Chronic Conditions</p>
              <textarea
                {...register('chronicConditions')}
                placeholder=''
                rows={5}
                className='resize-none border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
            </label>
            <label htmlFor='pastSurgery' className='flex flex-col w-full gap-2'>
              <p className='font-medium'>Past Surgeries</p>
              <textarea
                {...register('pastSurgery')}
                placeholder=''
                rows={5}
                className='resize-none border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
            </label>
          </div>

          <div className='w-full flex flex-col gap-6'>
            <label htmlFor='allergies' className='flex flex-col w-full gap-2'>
              <p className='font-medium'>Allergies</p>
              <textarea
                {...register('allergies')}
                placeholder=''
                rows={5}
                className='resize-none border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
            </label>
            <label htmlFor='currentMedication' className='flex flex-col gap-2'>
              <p className='font-medium'>Current Medication</p>
              <textarea
                {...register('currentMedication')}
                placeholder=''
                rows={5}
                className='resize-none border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
            </label>
          </div>
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
    </div>
  );
};
export default HealthInfo;
