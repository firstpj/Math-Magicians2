
import { Outlet } from 'react-router-dom';
import Navigation from '../../pages/Navigation';

function Layout() {
  return (
    <div>
      <header className="app-header">
        <h1>Math Magicians</h1>
        <Navigation />
      </header>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

export default Layout;
