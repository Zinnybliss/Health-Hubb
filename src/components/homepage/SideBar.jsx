/* eslint-disable react/prop-types */
import Logo from '../common/Logo';
import { cn } from '../../../lib/utils';
import MaxWidthWrapper from '../common/MaxWidthWrapper';
import { FaTimes } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const navlinks = [
  { label: 'Vaccination Hub', link: '/vaccination-hub' },
  { label: 'Health Hub', link: '/health-hub' },
  { label: 'Profile', link: '/profile' },
  { label: 'Log in', link: '/login' },
];

const SideBar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  return (
    <MaxWidthWrapper
      className={cn(
        'absolute left-0 top-0 h-screen w-screen bg-secondary z-10',
        {
          'sm:hidden': isSideBarOpen,
        }
      )}
    >
      <header className='mt-5 flex items-center justify-between'>
        <Logo />
        <button
          className='bg-transparent p-0 border-none focus:outline-none'
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          <FaTimes className='text-3xl text-red-700' />
        </button>
      </header>

      <ul className='items-center gap-8 flex flex-col mt-16'>
        {navlinks.map((nav, i) => {
          return (
            <Link
              key={i}
              to={nav.link}
              className='text-tertiary hover:text-[#7F87AB] transition-all border-b border-primary py-2 w-full text-lg font-semibold'
            >
              <li>{nav.label}</li>
            </Link>
          );
        })}
        <form className='sm:ml-8 w-full mt-10 bg-transparent border border-tertiary rounded-md py-1 px-3'>
          <label
            htmlFor='search'
            className='flex justify-between items-center gap-3'
          >
            <input
              type='text'
              id='search'
              placeholder=''
              className='bg-transparent w-full border-none outline-none focus:outline-none text-darkgray'
            />
            <BiSearch className='text-tertiary text-xl' />
          </label>
        </form>
      </ul>
    </MaxWidthWrapper>
  );
};
export default SideBar;
