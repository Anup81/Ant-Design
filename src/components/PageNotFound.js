import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>404 Error- Page Not Found</h1>
      <br />
      <br />
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default PageNotFound;
