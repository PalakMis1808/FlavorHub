import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="logo text-2xl font-bold text-primary">
        FlavorHub
      </div>

      {/* Navigation Links */}
      <div className={`navLinks flex flex-col md:flex-row md:items-center gap-6 ${show ? "showmenu" : ""}`}>
        <div className="links flex flex-col md:flex-row gap-4">
          {data[0].navbarLinks.map((element) => (
            <Link
              key={element.id}
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-secondary transition-colors"
              onClick={() => setShow(false)} // close menu on click
            >
              {element.title}
            </Link>
          ))}
        </div>
        <button className="menuBtn bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors">
          OUR MENU
        </button>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger md:hidden cursor-pointer text-2xl" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
