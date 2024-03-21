import PropTypes from 'prop-types';
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import "./Header.css";

export default function Header({ cartCount }) {
  return (
    <header>
      <Logo />
      <NavMenu />
      <HamburgerMenu cartCount={cartCount} />
    </header>
  );
}

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
}