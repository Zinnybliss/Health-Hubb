import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import MaxWidthWrapper from './MaxWidthWrapper';
import { BiMenu, BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import SideBar from '../homepage/SideBar';

const navlinks = [
  { label: 'Vaccination Hub', link: '/vaccination-hub' },
  { label: 'Health Hub', link: '/health-hub' },
  { label: 'Profile', link: '/profile' },
  { label: 'Log in', link: '/login' },
];

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <MaxWidthWrapper className='flex items-center justify-between py-5 sm:py-10 w-screen sm:w-full'>
      <Logo />
      <button
        className='bg-transparent p-0 border-none'
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      >
        <BiMenu className='text-4xl text-primary sm:hidden' />
      </button>
      <ul className='items-center gap-8 hidden sm:flex'>
        {navlinks.map((nav, i) => {
          return (
            <NavLink
              key={i}
              to={nav.link}
              className={`${({ isActive }) => {
                return isActive ? 'active' : '';
              }} text-tertiary hover:text-[#7F87AB] transition-all`}
            >
              <li>{nav.label}</li>
            </NavLink>
          );
        })}
        <form className='sm:ml-8 w-44 bg-transparent border border-tertiary rounded-md py-1 px-3'>
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

      {isSideBarOpen && (
        <SideBar
          setIsSideBarOpen={setIsSideBarOpen}
          isSideBarOpen={isSideBarOpen}
        />
      )}
    </MaxWidthWrapper>
  );
};
export default Navbar;
