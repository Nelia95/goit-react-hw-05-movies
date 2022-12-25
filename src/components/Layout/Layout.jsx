import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<InfinitySpin width="300" color="#d16ba5" />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
