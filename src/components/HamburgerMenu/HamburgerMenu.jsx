import "./HamburgerMenu.css";
import PropTypes from 'prop-types';

export default function HamburgerMenu({ cartCount }) {
  return (
    <>
      <div className="more">
        <a className="menu" href="#">
          <i className="fa fa-align-right" />
        </a>
        <div className="figure">{cartCount}</div>
      </div>
    </>
  );
}

HamburgerMenu.propTypes = {
  cartCount: PropTypes.number.isRequired,
};
