import { Link } from 'react-router-dom';
import Logo from '../assets/icons/iotbtech.svg';

const AuthNavBar = () => {
  return (
    <nav className="flex items-center px-8 shadow-md bg-white relative z-[1000] h-16 font-montserrat mt-4">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-28 h-28 md:w-32 md:h-32 cursor-pointer" />
      </Link>
    </nav>
  );
};

export default AuthNavBar;
