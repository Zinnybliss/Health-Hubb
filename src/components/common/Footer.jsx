import logoPic from '../../images/img1.png';
import { BsEnvelopePaper } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";


const Footer = () => {
  return (
    <footer className='footer w-screen'>
      <div className=' flex gap-10 text-white h-full w-full items-center justify-center'>
      <div className='sect1 w-60'>
        <img src={logoPic} className='size-14 '/>
        <p className='text-wrap'>
          Lorem ipsum dolor sit amet consectetur. Mattis quis nibh elit eu
          lectus sollicitudin gravida lorem.
        </p>
        <h3>Contact Us</h3>
        <p className='flex items-center gap-3'><BiPhone />xxxx xxx xxxx</p>
        <p className='flex items-center gap-3'><BsEnvelopePaper />Dolorsitamet@gmail.com</p>
      </div>
      <div className='sect2'>
        <h3>Information</h3>
        <h4>About Us</h4>
        <h4>Features</h4>
        <h4>Blogs</h4>
        <h4>Health Hub</h4>
        <h4>Vaccine Hub</h4>
        <h4>Testimonials</h4>
      </div>
      <div className='sect3'>
        <h3>Helpful Links</h3>
        <p>Services</p>
        <p>Help Center</p>
        <p>How it works</p>
        <p>Terms and Condition</p>
        <p>Privacy Policy</p>
      </div>
      <div className='sect4 '>
        <h3>Newsletter</h3>
        <p className='text-wrap'>Lorem ipsum dolor sit amet consectetur, Ac in.</p>
        <div className='subsect4 flex flex-col gap-4'>
        <input type='email' />
        <button className='bg-[#2D3142;]'>Submit</button> 
        </div>
      </div>
      </div>
      <div>
      <hr/>
      </div>
    </footer>
  );
};
export default Footer;
