import logoPic from '../../images/logo.png';
import instagramIcon from '../../images/insta.png';
import youtubeIcon from '../../images/youtube.png';
import facebookIcon from '../../images/facebook.png';
import { BsEnvelopePaper } from 'react-icons/bs';
import { BiEnvelope, BiPhone } from 'react-icons/bi';
import MaxWidthWrapper from './MaxWidthWrapper';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className='bg-secondary'>
      <MaxWidthWrapper className='flex flex-col gap-10 text-white h-full w-full items-start pt-10 pb-5 justify-between sm:gap-16 sm:flex-row'>
        <aside className='sm:hidden'>
          <Logo />
        </aside>
        <div className='w-full sm:hidden sm:w-1/4'>
          <h3 className='text-lg font-medium mb-3'>Newsletter</h3>
          <aside className='flex flex-col gap-2'>
            <p className='text-wrap'>
              Subscribe to the Trackit Wellness Kit newsletter for regular
              updates.
            </p>
            <div className='subsect4 flex flex-col gap-4'>
              <label
                htmlFor='newsletter'
                className='bg-[#E1E1E1] flex gap-4 items-center rounded-md px-5'
              >
                <BiEnvelope className='text-lg text-primary/55' />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='bg-transparent py-2 rounded-md text-primary/55 placeholder:text-primary/55'
                />
              </label>
              <button className='bg-[#2D3142;]'>Subscribe</button>
            </div>
          </aside>
        </div>
        <div className='w-full flex flex-col gap-4 sm:w-2/5'>
          <aside className='w-full sm:w-4/5'>
            <a href='/' className='w-fit'>
              <img src={logoPic} className='w-14 hidden sm:block mb-3' />
            </a>
            <p className='hidden sm:block text-wrap'>
              Empowering Communities with Real-Time Health Insights.
            </p>
          </aside>
          <aside className='w-full sm:w-4/5'>
            <h3 className='text-lg font-medium mb-3'>Contact Us</h3>
            <p className='flex items-center gap-3'>
              <BiPhone />
              +234 8172626389
            </p>
            <p className='flex items-center gap-3'>
              <BsEnvelopePaper />
              hello@trackitwellnesskit.com
            </p>
          </aside>
        </div>
        <div className=''>
          <h3 className='text-lg font-medium mb-3'>Information</h3>
          <aside className='flex flex-col gap-2'>
            <a href=''>About Us</a>
            <a href=''>Features</a>
            <a href=''>Blogs</a>
            <a href='/health-hub'>Health Hub</a>
            <a href='/vaccination-hub'>Vaccine Hub</a>
            <a href=''>Testimonials</a>
          </aside>
        </div>
        <div className=''>
          <h3 className='text-lg font-medium mb-3'>Helpful Links</h3>
          <aside className='flex flex-col gap-2'>
            <a href=''>Services</a>
            <a href=''>Help Center</a>
            <a href=''>How it works</a>
            <a href=''>Terms and Condition</a>
            <a href=''>Privacy Policy</a>
          </aside>
        </div>
        <div className='hidden w-full sm:block sm:w-1/4'>
          <h3 className='text-lg font-medium mb-3'>Newsletter</h3>
          <aside className='flex flex-col gap-2'>
            <p className='text-wrap'>
              Subscribe to the Trackit Wellness Kit newsletter for regular
              updates
            </p>
            <div className='subsect4 flex flex-col gap-4'>
              <label
                htmlFor='newsletter'
                className='bg-[#E1E1E1] flex gap-4 items-center rounded-md px-5'
              >
                <BiEnvelope className='text-lg text-primary/55' />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='bg-transparent py-2 rounded-md text-primary/55 placeholder:text-primary/55'
                />
              </label>
              <button className='bg-[#2D3142;]'>Submit</button>
            </div>
          </aside>
        </div>
      </MaxWidthWrapper>
      <div className='mt-10'>
        <hr />
        <aside className='py-8 flex items-center justify-center gap-8'>
          <a href='instagram'>
            <img src={instagramIcon} alt='Instagram icon' />
          </a>
          <a href='youtube'>
            <img src={youtubeIcon} alt='Youtube icon' />
          </a>
          <a href='facebook'>
            <img src={facebookIcon} alt='Facebook icon' />
          </a>
        </aside>
      </div>
    </footer>
  );
};
export default Footer;
