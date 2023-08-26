import { Outlet } from 'react-router-dom';
import Navigation from '../../pages/Navigation';

function Layout() {
  return (
    <div>
      <header className="app-header">
        <h1>Math Magicians</h1>
        <Navigation />
      </header>
      <Outlet />
    </div>
  );
}
export default Layout;
