import { useForm } from 'react-hook-form';
import Navbar from '../components/common/Navbar';
import registerImg from '../images/registerImg.png';
import MaxWidthWrapper from '../components/common/MaxWidthWrapper';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

const Register = () => {
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
    <main className='mb-10'>
      <Navbar />

      <section>
        <header className='relative h-40 sm:h-60'>
          <div className='w-full h-full absolute'>
            <img src={registerImg} alt='' className='w-full h-full' />
          </div>
          <div className='relative w-full h-full items-center justify-center flex flex-col text-center px-5 py-3'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <p className='mt-3 sm:text-lg'>
              Enter your details below to create your account and get started
            </p>
          </div>
        </header>

        <MaxWidthWrapper className='my-24'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full mx-auto sm:w-4/5'
          >
            <aside className='flex flex-col gap-6 sm:flex-row sm:gap-24 mb-12'>
              <section className='flex flex-col gap-6 w-full'>
                <label htmlFor='fullName' className='flex flex-col gap-2'>
                  <p className='font-medium'>Full Name</p>
                  <input
                    type='text'
                    {...register('fullName', {
                      required: 'Full Name is required',
                    })}
                    placeholder='Enter your name'
                    className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                  />
                  {errors.fullName?.type === 'required' && (
                    <p className='text-red-500 text-sm'>
                      {errors.fullName.message}
                    </p>
                  )}
                </label>

                <label htmlFor='dateOfBirth' className='flex flex-col gap-2'>
                  <p className='font-medium'>Date Of Birth</p>
                  <input
                    type='date'
                    {...register('dateOfBirth')}
                    placeholder='MM / DD / YYYY'
                    className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                  />
                </label>

                <label htmlFor='state' className='flex flex-col gap-2'>
                  <p className='font-medium'>State</p>
                  <input
                    type='text'
                    {...register('state')}
                    placeholder=''
                    className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                  />
                </label>

                <label htmlFor='gender' className='flex flex-col gap-2'>
                  <p className='font-medium'>Gender</p>
                  <input
                    type='text'
                    {...register('gender')}
                    placeholder=''
                    className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                  />
                </label>
              </section>

              <section className='flex flex-col gap-6 w-full'>
                <label htmlFor='email' className='flex flex-col gap-2'>
                  <p className='font-medium'>Email</p>
                  <input
                    type='text'
                    {...register('email', {
                      required: 'Email is required',
                      pattern: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim,
                    })}
                    placeholder='Enter your email'
                    className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                  />
                  {errors.email?.type === 'required' && (
                    <p className='text-red-500 text-sm'>
                      {errors.email.message}
                    </p>
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
                    placeholder='Enter your phone number'
                    className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                  />
                  {errors.phoneNumber?.type === 'required' && (
                    <p className='text-red-500 text-sm'>
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </label>

                <label htmlFor='lg' className='flex flex-col gap-2'>
                  <p className='font-medium'>Local Government</p>
                  <input
                    type='text'
                    {...register('lg')}
                    placeholder=''
                    className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                  />
                </label>

                <label htmlFor='gender' className='flex flex-col gap-2'>
                  <p className='font-medium'>Gender</p>
                  <input
                    type='text'
                    {...register('gender')}
                    placeholder=''
                    className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
                  />
                </label>
              </section>
            </aside>

            <div className='w-full flex items-center justify-center sm:justify-end'>
              <button
                type='submit'
                className={cn(
                  'w-56 bg-secondary hover:bg-secondary/65 transition-all',
                  {
                    'disabled:cursor-wait': isSubmitting,
                  }
                )}
              >
                {isSubmitting ? (
                  <span className='h-5 w-5 rounded-full bg-transparent border-y-2 border-white animate-spin'></span>
                ) : (
                  'Sign Up'
                )}
              </button>
            </div>
          </form>

          <p className='text-center my-10'>
            Already have an account?{' '}
            <Link to='/login' className='text-blue-500'>
              Sign In
            </Link>
          </p>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};
export default Register;
