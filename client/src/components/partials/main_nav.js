import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Music Festival
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Artists
            </a>

            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/artists">
                All Artists
              </Link>
              <Link className="dropdown-item" to="/artists/new">
                New Artist
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Stages
            </a>

            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/stages">
                All Stages
              </Link>
              <Link className="dropdown-item" to="/stages/new">
                New Stage
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
            className="nav-link dropdown-toggle"
            href="/"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            >
              Performances
            </a>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          </li>

            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/performances">
                All Performances
              </Link>
              <Link className="dropdown-item" to="/performances/new">
                New Performance
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;
