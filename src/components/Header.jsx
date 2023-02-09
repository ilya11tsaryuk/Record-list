import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className={'w-full flex justify-between p-5 bg-primary-700 text-white font-bold uppercase '}>
      <Link to={"/login"} className={'hover:underline'}>login</Link>
      <Link to={"/"} className={'hover:underline'}>DashboardPage</Link>
    </nav>
  );
};

export default Header;
