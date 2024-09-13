import { useForm } from 'react-hook-form';
import loginImg from '../images/loginImg.png';
import MaxWidthWrapper from '../components/common/MaxWidthWrapper';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import Navbar from '../components/common/Navbar';

const Login = () => {
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
      <article className='bg-secondary py-8 px-6 text-center font-medium border border-primary rounded-b-xl sm:hidden'>
        Empowering HealthCare, one click at a time.
        <br />
        Your health, Your records, Your control
      </article>

      <MaxWidthWrapper className='flex gap-0 sm:gap-10 lg:gap-36'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='my-14 w-full sm:w-1/2'
        >
          <header>
            <h1 className='text-center text-3xl font-medium sm:text-4xl'>
              Welcome
            </h1>
            <p className='text-center'>
              Kindly login to gain access to your account
            </p>
          </header>

          <section className='my-10 flex flex-col gap-5'>
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
                <p className='text-red-500 text-sm'>{errors.email.message}</p>
              )}
              {errors.email?.type === 'pattern' && (
                <p className='text-red-500 text-sm'>
                  Please enter a valid email
                </p>
              )}
            </label>
            <label htmlFor='password' className='flex flex-col gap-2'>
              <p className='font-medium'>Password</p>
              <input
                type='text'
                {...register('password', {
                  required: 'Password is required',
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,16}$/,
                })}
                placeholder='Enter your password'
                className='border border-primary rounded-md w-full bg-transparent py-2 px-5 font-light placeholder:font-light focus:outline-none'
              />
              {errors.password?.type === 'required' && (
                <p className='text-red-500 text-sm'>
                  {errors.password.message}
                </p>
              )}
              {errors.password?.type === 'pattern' && (
                <p className='text-red-500 text-sm'>
                  Password must be at least 8 characters long. At least 1
                  Uppercase, 1 lowercase, 1 number, and 1 special characters
                </p>
              )}
            </label>
            <p className='text-secondary text-right cursor-pointer mt-4'>
              Forgot Password?
            </p>
          </section>
          <button
            type='submit'
            className={cn(
              'w-full bg-secondary hover:bg-secondary/65 transition-all',
              {
                'disabled:cursor-wait': isSubmitting,
              }
            )}
          >
            {isSubmitting ? (
              <span className='h-5 w-5 rounded-full bg-transparent border-y-2 border-white animate-spin'></span>
            ) : (
              'Login'
            )}
          </button>

          <div className='flex items-center gap-5 mt-9'>
            <hr className='w-full border-black' />
            <span className='text-lg'>Or</span>
            <hr className='w-full border-black' />
          </div>

          <button
            type='button'
            className='flex gap-5 items-center justify-center w-full border border-secondary bg-transparent text-black font-medium my-6 focus:outline-none'
          >
            <FcGoogle className='text-2xl' />
            <span>Continue with Google</span>
          </button>

          <p className='text-center'>
            Don&apos;t have an account?{' '}
            <Link to='/register' className='text-blue-500'>
              Sign Up
            </Link>
          </p>
        </form>

        <div className='hidden w-1/2 relative sm:flex'>
          <aside className='absolute left-0 top-0 h-full'>
            <img
              src={loginImg}
              alt='Image of a patience receiving injection'
              className='w-full h-full'
            />
          </aside>

          <article className='relative w-fit h-fit mx-auto bg-secondary py-8 px-6 text-center font-medium border border-primary rounded-xl self-end mb-12 hidden sm:flex'>
            Empowering HealthCare, one click at a time.
            <br />
            Your health, Your records, Your control
          </article>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};
export default Login;
