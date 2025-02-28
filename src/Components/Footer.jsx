import Logo from '../assets/logo.svg?react';

const Footer = () => {
  return (
    <footer className="bg-primary-color text-center h-40 pt-12">
      <div className="container">
        <Logo className="m-auto" />
        <p className="text-white text-base mt-4">
          TMDB. Alguns direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
