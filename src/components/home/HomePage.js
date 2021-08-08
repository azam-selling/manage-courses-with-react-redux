import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="bg-light">
    <h1>Web React and Redux concept</h1>
    <p> Building more intarcative websites with React and Redux.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      About
    </Link>
  </div>
);

export default HomePage;
