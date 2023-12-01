import React from "react";
import { Link } from "react-router-dom";
import "../css/site.css"

const SiteNavbar = () => {
  return (
    <>
      <nav className="navbar backgrundColor1 navbar-expand-lg bg-body-tertiary">
        <div className=" container-fluid">
          <a className="navbar-brand  ms-5" href="#">
          <Link to="/">
            <img style={{width:50, height:60}} src="https://img.freepik.com/premium-vector/black-background-with-letter-e-white_853558-5400.jpg" alt="" />
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
                <Link to="/SiteMusic" className=" navbar-link color2">MÜZİK</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <Link to="/SiteTheatre" className=" navbar-link color2">TİYATRO</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <Link to="/SiteDance" className=" navbar-link color2">DANS</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <Link to="/SiteSport" className=" navbar-link color2">SPOR</Link>
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
              <button className="btn me-5 backgroundColor3" type="submit">
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
