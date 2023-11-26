import React from "react";
import { Link } from "react-router-dom";

const SiteNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand  ms-5" href="#">
          <Link to="/">
            <img style={{width:50}} src="https://productimages.hepsiburada.net/s/25/550/10102726426674.jpg/format:webp" alt="" />
          </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                <Link to="/SiteMusic">MÜZİK</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <Link to="/SiteTheatre">TİYATRO</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <Link to="/SiteDance">DANS</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <Link to="/SiteSport">SPOR</Link>
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-5" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SiteNavbar;
