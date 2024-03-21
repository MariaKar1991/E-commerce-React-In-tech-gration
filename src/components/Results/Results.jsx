import "./Results.css";
import PropTypes from "prop-types";

export default function Results({ numResults }) {
  return (
    <>
      <h2 className="title">
        Bags<span>{numResults} results</span>
      </h2>
    </>
  );
}

Results.propTypes = {
  numResults: PropTypes.number.isRequired,
};
