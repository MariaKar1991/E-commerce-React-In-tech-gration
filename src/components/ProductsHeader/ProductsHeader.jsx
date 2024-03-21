import { useState, useEffect } from "react";
import "./ProductsHeader.css";
import Results from "../Results/Results";
import Close from "../Close/Close";

export default function ProductsHeader() {
  const [numResultsFromState, setNumResults] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products. Please try again later.");
        }
        return response.json();
      })
      .then((data) => {
        setNumResults(data.length);
      })
      .catch((error) => {
        if (error instanceof SyntaxError) {
          setError(
            "Error parsing JSON data. Please check the format of the JSON file."
          );
        } else {
          setError("Failed to fetch products. Please try again later.");
        }
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="sub-header">
      {error && (
        <div className="alert" role="alert">
          {error}
        </div>
      )}
      {!error && <Results numResults={numResultsFromState} />}
      <Close />
    </div>
  );
}
