import React from "react";
import "./Navbar.css";
import Logo from "../../../assets/logo-fashion.png";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg shadow">
        <div class="container">
          <a class="navbar-brand" href="/home">
            <span class='logo-fashion'>
              <img src={Logo} alt="logo" />
            </span>
            FASHION
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  CATALOG
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Product">
                  FASHION
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  FAVORITE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  LIFE STYLE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link sign-up" href="/Login">
                  SIGN UP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
