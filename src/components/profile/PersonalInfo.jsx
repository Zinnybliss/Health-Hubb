import { useForm } from 'react-hook-form';
import { cn } from '../../../lib/utils';

const PersonalInfo = () => {
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
        <h1 className='text-lg font-medium'>Personal Information</h1>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col my-10 ml-0 gap-10 sm:ml-3'
      >
        <section className='flex w-full flex-col gap-6 sm:flex-row sm:gap-14'>
          <div className='w-full flex flex-col gap-6'>
            <label htmlFor='firstName' className='flex flex-col w-full gap-2'>
              <p className='font-medium'>First Name</p>
              <input
                type='text'
                {...register('firstName', {
                  required: 'First Name is required',
                })}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.firstName?.type === 'required' && (
                <p className='text-red-500 text-sm'>
                  {errors.firstName.message}
                </p>
              )}
            </label>
            <label htmlFor='dob' className='flex flex-col w-full gap-2'>
              <p className='font-medium'>Date Of Birth</p>
              <input
                type='date'
                {...register('dob')}
                placeholder='DD / MM / YYYY'
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.dob?.type === 'required' && (
                <p className='text-red-500 text-sm'>{errors.dob.message}</p>
              )}
            </label>
            <label htmlFor='gender' className='flex flex-col w-full gap-2'>
              <p className='font-medium'>Gender</p>
              <input
                type='text'
                {...register('gender', {
                  required: 'Gender is required',
                })}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.gender?.type === 'required' && (
                <p className='text-red-500 text-sm'>{errors.gender.message}</p>
              )}
            </label>
            <label
              htmlFor='streetAddress'
              className='flex flex-col w-full gap-2'
            >
              <p className='font-medium'>Street Address</p>
              <input
                type='text'
                {...register('streetAddress')}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
            </label>
            <label htmlFor='state' className='flex flex-col w-full gap-2'>
              <p className='font-medium'>State</p>
              <input
                type='text'
                {...register('state', {
                  required: 'State is required',
                })}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.state?.type === 'required' && (
                <p className='text-red-500 text-sm'>{errors.state.message}</p>
              )}
            </label>
          </div>

          <div className='w-full flex flex-col gap-6'>
            <label htmlFor='lastName' className='flex flex-col w-full gap-2'>
              <p className='font-medium'>Last Name</p>
              <input
                type='text'
                {...register('lastName', {
                  required: 'Last Name is required',
                })}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.lastName?.type === 'required' && (
                <p className='text-red-500 text-sm'>
                  {errors.lastName.message}
                </p>
              )}
            </label>
            <label htmlFor='email' className='flex flex-col gap-2'>
              <p className='font-medium'>Email</p>
              <input
                type='text'
                {...register('email', {
                  required: 'Email is required',
                  pattern: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim,
                })}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.email?.type === 'required' && (
                <p className='text-red-500 text-sm'>{errors.email.message}</p>
              )}
              {errors.email?.type === 'pattern' && (
                <p className='text-red-500 text-sm'>
                  Please enter a valid email
                </p>
              )}
            </label>
            <label htmlFor='phoneNumber' className='flex flex-col gap-2'>
              <p className='font-medium'>Phone Number</p>
              <input
                type='text'
                {...register('phoneNumber', {
                  required: 'Phone number is required',
                })}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.phoneNumber?.type === 'required' && (
                <p className='text-red-500 text-sm'>
                  {errors.phoneNumber.message}
                </p>
              )}
            </label>

            <label htmlFor='city' className='flex flex-col w-full gap-2'>
              <p className='font-medium'>City</p>
              <input
                type='text'
                {...register('city', {
                  required: 'First Name is required',
                })}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.city?.type === 'required' && (
                <p className='text-red-500 text-sm'>{errors.city.message}</p>
              )}
            </label>
            <label
              htmlFor='zip_postalCode'
              className='flex flex-col w-full gap-2'
            >
              <p className='font-medium'>Zip / Postal Code</p>
              <input
                type='text'
                {...register('zip_postalCode', {
                  required: '',
                })}
                placeholder=''
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.zip_postalCode?.type === 'required' && (
                <p className='text-red-500 text-sm'>
                  {errors.zip_postalCode.message}
                </p>
              )}
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
export default PersonalInfo;
