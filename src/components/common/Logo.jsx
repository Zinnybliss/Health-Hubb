import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Logo = () => {
  return (
    <Link to='/' className='w-16 h-16'>
      <img src={logo} alt='Logo' className='w-full h-full' />
    </Link>
  );
};
export default Logo;
