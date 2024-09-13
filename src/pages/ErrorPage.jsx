import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

export default function Errorpage() {
  const error = useRouteError();
  let errorMessage;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = 'This page does not exist!';
    }

    if (error.status === 401) {
      errorMessage = 'You are not authorized to see this';
    }

    if (error.status === 503) {
      errorMessage = 'Looks like our API is down';
    }
  }

  return (
    <div
      id='error-page'
      className='flex items-center justify-center flex-col gap-6 h-screen'
    >
      <h1 className='text-5xl font-semibold italic text-red-500'>Oops!</h1>
      <p className='text-2xl'>{errorMessage}</p>
      <Link to='/' className='bg-[#0F8931] px-8 py-2 rounded-lg text-white'>
        Home
      </Link>
    </div>
  );
}
