import React from "react";

export const HeaderComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="Header" />
            <div className="Header_left">
              <img
                src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                className="Header_logo"
                alt="Disney +&nbsp;Hotstar"
              />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#TV"
            aria-controls="TV"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item header_list">
                <a className="nav-link active" aria-current="page" href="#">
                  TV
                </a>
              </li>
              <li className="nav-item header_list">
                <a className="nav-link active" aria-current="page" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item header_list">
                <a className="nav-link active" href="#">
                  Sports
                </a>
              </li>
              <li className="nav-item header_list">
                <a className="nav-link active" href="#">
                  Dysney+
                </a>
              </li>
              <li className="nav-item header_list">
                <a className="nav-link active Movies" href="#">
                  <img
                    src={
                      "https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg"
                    }
                  />
                </a>
              </li>
            </ul>
          </div>

          <form class="d-flex"> 
            <div className="search"></div>
            <input
              class="form-control me-2 search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="SUBCRIBE"></div>
            <button class="btn btn-primary" type="submit" herf="#">
              SUBSCRIBE
            </button>
          </form>
          <div class="dropdown">
            <div
              className="profile-container mx-2 dropdown-toggle"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="profile-img"
                src="https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg"
              />
            </div>
            {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button> */}
            <ul
              class="dropdown-menu custom-dropdown"
              aria-labelledby="dropdownMenu2"
            >
              <li>
                <button class="dropdown-item" type="button">
                  Watchlist
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  My Account
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
