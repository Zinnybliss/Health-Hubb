import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Errorpage from './pages/Errorpage.jsx';
import Register from './pages/register.jsx';
import Login from './pages/Login.jsx';
import ProfilePage from './components/profile/index.jsx';
import HealthHub from './pages/HealthHub.jsx';
import VaccinationHub from './pages/VaccinationHub.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Errorpage />}>
      <Route index element={<HomePage />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='profile' element={<ProfilePage />} />
      <Route path='health-hub' element={<HealthHub />} />
      <Route path='vaccination-hub' element={<VaccinationHub />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
