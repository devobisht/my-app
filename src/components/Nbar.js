import React from "react";
import PropTypes from "prop-types";

export default function Nbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.allMode} bg-${props.allMode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.aboutchng}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.link}
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* //switch button */}
          <div className={`form-check form-switch text-${props.allMode==='light'?'dark':'light'} mx-3`}>
             <input className="form-check-input" type="checkbox" onClick={props.togMode} id="flexSwitchCheckDefault"/>
             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toogle Mode</label>
         </div>
        </div>
      </div>
    </nav>
  );
}
//1st propType(refrence varialbe) should be small lateer p
Nbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutchng: PropTypes.string.isRequired,
};

Nbar.defaultProps={
  title:'Default Title',
  aboutchng:'DefaultAbout'
}