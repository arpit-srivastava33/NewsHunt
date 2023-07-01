import React from 'react'
import {Link} from "react-router-dom"
import NewsImage from "./newshunt.png"
// style={{ backgroundColor: "#e3f2fd" }}
// business
// entertainment
// general
// health
// science
// sports
// technology
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
        <img src={NewsImage} alt="Logo" width="35" height="40" className="d-inline-block align-text-top"/>
          <Link className="navbar-brand" to="/general">NewsHunt</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse div" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mynav">
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
