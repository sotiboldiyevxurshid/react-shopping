import React, { useContext, useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { ThemeContext } from "../GlobalComponents/ThemeProvider";
import { BiSun, BiMoon, BiCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";

const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
    console.log(darkMode);
    // eslint-disable-next-line
  }, [darkMode]);

  const { isEmpty, totalItems } = useCart();

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant={darkMode ? "dark" : "light"} //bg-light
      className={darkMode ? "bg-light-black border-bottom" : "border-bottom"}
      style={{
        width: "100%",
        position: "fixed",
        zIndex: 100,
        background: "transparent",
      }}
    >
      <Container>
        <Link to="/">
          <Navbar.Brand
            className={darkMode ? "text-dark-primary" : "text-light-primary"}
          >
            <b>Simple-ecart</b>
          </Navbar.Brand>
        </Link>
        <Link to="/create">
          <Navbar.Brand
            className={darkMode ? "text-dark-primary" : "text-light-primary"}
          >
            <b>Create</b>
          </Navbar.Brand>
        </Link>
        {/* <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Change language
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#!">
                Uzbek
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#!">
                English
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#!">
                Russian
              </a>
            </li>
          </ul>
        </div> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="sign-in"
              className={`nav-link ${
                darkMode ? "text-dark-primary" : "text-light-primary"
              }`}
            >
              Sign in
            </Link>
            <Nav.Link
              className={darkMode ? "text-dark-primary" : "text-light-primary"}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
            </Nav.Link>
            <Link
              to="/cart"
              style={{ textDecoration: "none", gap: "5px" }}
              className={`${
                darkMode ? "text-dark-primary" : "text-light-primary"
              } d-flex align-items-center`}
            >
              <BiCart style={{ textDecoration: "none" }} size="2rem" />
              {!isEmpty && (
                <span
                  style={{
                    position: "relative",
                    left: "-11px",
                    top: "13px",
                    color: "white",
                    width: "23px",
                    height: "25px",
                    background: "red",
                    borderRadius: "50px",
                    textAlign: "center",
                  }}
                >
                  {totalItems}
                </span>
              )}
              <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}></span>
            </Link>
            <Link
              to="my-account"
              className={`nav-link ${
                darkMode ? "text-dark-primary" : "text-light-primary"
              }`}
            >
              <VscAccount size="1.8rem" />
              &nbsp;My Account
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
