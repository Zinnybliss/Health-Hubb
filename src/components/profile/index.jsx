import { useState } from 'react';
import MaxWidthWrapper from '../common/MaxWidthWrapper';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { cn } from '../../../lib/utils';
import profileImg from '../../images/profileImg.png';
import { FaCamera } from 'react-icons/fa6';
import PersonalInfo from './PersonalInfo';
import HealthInfo from './HealthInfo';
import Vaccination from './Vaccination';
import AppointmentReminder from './AppointmentReminder';
import AccountSecurity from './AccountSecurity';
import DocumentsActivity from './DocumentsActivity';

const links = [
  'Personal Information',
  'Health Information',
  'Vaccination Records',
  'Appointment & Reminder',
  'Account & Security',
  'Documents & Activity',
];

const ProfilePage = () => {
  const [activeLink, setActiveLink] = useState('Personal Information');

  return (
    <div>
      <Navbar />
      <MaxWidthWrapper className='flex flex-col pt-4 pb-16 border-t sm:py-0 sm:flex-row sm:items-start'>
        <ul className='flex flex-wrap items-center justify-center gap-x-2 sm:px-16 sm:py-24 sm:flex-col sm:gap-5'>
          {links.map((link, i) => {
            return (
              <button
                key={i}
                onClick={() => setActiveLink(link)}
                className={cn(
                  'bg-transparent text-primary transition-all border-none hover:bg-secondary hover:rounded-md hover:text-white focus:outline-none px-2 sm:px-5 py-2 text-sm',
                  {
                    'bg-secondary rounded-md text-white px-2 sm:px-5 py-2':
                      activeLink === link,
                  }
                )}
              >
                <li>{link}</li>
              </button>
            );
          })}
        </ul>

        <section className='pt-4 pl-0 flex flex-col gap-6 w-full sm:w-3/5 sm:pt-16 sm:pl-6 sm:border-l'>
          <section className='bg-secondary rounded-md py-6 px-5 h-fit flex gap-8'>
            <div className='relative'>
              <aside className='h-16 w-16 sm:h-20 sm:w-20'>
                <img
                  src={profileImg}
                  alt='profile image'
                  className='w-full h-full'
                />
              </aside>
              <FaCamera className='absolute -bottom-1 -right-1 text-xl text-white' />
            </div>
            <p className='border-white py-1 px-3 text-sm h-fit flex self-end bg-transparent font-normal text-white font-playfair'>
              Edit Profile
            </p>
          </section>

          {activeLink === 'Personal Information' ? (
            <PersonalInfo />
          ) : activeLink === 'Health Information' ? (
            <HealthInfo />
          ) : activeLink === 'Vaccination Records' ? (
            <Vaccination />
          ) : activeLink === 'Appointment & Reminder' ? (
            <AppointmentReminder />
          ) : activeLink === 'Account & Security' ? (
            <AccountSecurity />
          ) : activeLink === 'Documents & Activity' ? (
            <DocumentsActivity />
          ) : null}
        </section>
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
};
export default ProfilePage;
