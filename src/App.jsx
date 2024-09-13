import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-white'>
      <Outlet />
    </div>
  );
};
export default App;
