import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import ig from "../images/ig.svg";
import fb from "../images/fb.svg";
import { Link } from "react-router-dom";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-50 md:bg-opacity-90 transition duration-300 ease-in-out bg-[#5AA568] ${
        !top && " backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img src={logo} className="sm:h-8 h-9"/>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/faq"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <Link to="/" className="block" aria-label="Cruip">
                    <img src={ig} className="h-6 md:h-7 "/>
                  </Link>
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <Link to="/" className="block" aria-label="Cruip">
                    <img src={fb} className="h-6 md:h-7"/>
                  </Link>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
