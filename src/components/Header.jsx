import { useState } from "react";

import { Link } from "react-router-dom";

import pipheader_01 from "/assets/pipheader_01.png";
import pipheader_02 from "/assets/pipheader_02.png";
import pipheader_03 from "/assets/pipheader_03.png";
import pipheader_04 from "/assets/pipheader_04.png";
import pipheader_05 from "/assets/pipheader_05.png";
import pipheader_06 from "/assets/pipheader_06.png";
import pipheader_07 from "/assets/pipheader_07.png";
import pipheader_08 from "/assets/pipheader_08.png";

import iconbars from "/assets/iconbars.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <>
      <header>
        <nav>
          <section className="nav-computer">
            <Link to="/">
              <img
                src={pipheader_01}
                alt="Pip Murphy"
                className="nav-img-full"
                id="nav-logo"
              />
            </Link>
            <Link to="/">
              <img src={pipheader_02} alt="Home" className="nav-img-full" />
            </Link>
            <Link to="/blog">
              <img src={pipheader_03} alt="blog" className="nav-img-full" />
            </Link>
            <Link to="/books">
              <img src={pipheader_04} alt="Books" className="nav-img-full" />
            </Link>
            <Link to="/projects">
              <img src={pipheader_05} alt="Projects" className="nav-img-full" />
            </Link>
            <Link to="/works">
              <img src={pipheader_06} alt="Works" className="nav-img-full" />
            </Link>
            <Link to="/about">
              <img src={pipheader_07} alt="About" className="nav-img-full" />
            </Link>
            <Link to="/support">
              <img src={pipheader_08} alt="Support" className="nav-img-full" />
            </Link>
          </section>

          <section className="nav-handheld">
            <section className="nav-handheld-top">
              <Link to="/">
                <img src={pipheader_01} alt="Pip Murphy" id="nav-logo" />
              </Link>
              <button className="nav-dropdown-button" onClick={handleOpen}>
                <img src={iconbars} alt="select page" />
              </button>
            </section>

            {open ? (
              <ul className="nav-dropdown-select">
                <li>
                  <Link to="/">
                    <button
                      className="nav-dropdown-option"
                      id="nav-dropdown-home"
                      onClick={handleNav}
                    >
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <button
                      className="nav-dropdown-option"
                      id="nav-dropdown-blog"
                      onClick={handleNav}
                    >
                      Blog
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/books">
                    <button
                      className="nav-dropdown-option"
                      id="nav-dropdown-books"
                      onClick={handleNav}
                    >
                      Books
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/projects">
                    <button
                      className="nav-dropdown-option"
                      id="nav-dropdown-projects"
                      onClick={handleNav}
                    >
                      Projects
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/works">
                    <button
                      className="nav-dropdown-option"
                      id="nav-dropdown-works"
                      onClick={handleNav}
                    >
                      Works
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <button
                      className="nav-dropdown-option"
                      id="nav-dropdown-about"
                      onClick={handleNav}
                    >
                      About
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/support">
                    <button
                      className="nav-dropdown-option"
                      id="nav-dropdown-support"
                      onClick={handleNav}
                    >
                      Support
                    </button>
                  </Link>
                </li>
              </ul>
            ) : null}
          </section>
        </nav>
      </header>
    </>
  );
};

export default Header;
