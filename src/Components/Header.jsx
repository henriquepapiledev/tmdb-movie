import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg?react';

const Header = () => {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <header className="sticky top-0 z-50 bg-primary-color pt-5 pb-5 lg:pt-4 lg:pb-4">
      <div className="container flex justify-center lg:justify-start">
        <Link
          className="flex justify-center lg:block"
          to="/"
          onClick={handleScrollTop}
        >
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default Header;
