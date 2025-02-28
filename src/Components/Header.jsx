import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg?react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-primary-color pt-4 pb-4">
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default Header;
