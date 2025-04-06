import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../myComponents/Footer';

const AppLayout = () => {

  return (
    <div className="max-w-full overflow-x-hidden">

      {/* Main Content */}
      <main className="font-montserrat">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;
