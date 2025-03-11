import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg?react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-primary-color pt-5 pb-5 lg:pt-4 lg:pb-4">
      <div className="container">
        <Link className="flex justify-center lg:block" to="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default Header;
