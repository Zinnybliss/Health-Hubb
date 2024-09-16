import { Link } from 'react-router-dom';
import logo from '../../images/img1.png';

const Logo = () => {
  return (
    <Link to='/' className='w-20 h-10'>
      <img src={logo} alt='Logo' className='w-full h-full' />
    </Link>
  );
};
export default Logo;
