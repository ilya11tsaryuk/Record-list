import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to={"/login"}>login</Link>
      <Link to={"/"}>DashboardPage</Link>
    </nav>
  );
};

export default Header;
