import React from "react";
export const Header = () => {
  return (
    <div className="Header py-3 px-5">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid custom-nav d-flex justify-content-between">
          <div>
            <a className="navbar-brand" href="#">
              <img className="Voot"
                src="https://www.voot.com/images/Voot-Logo.svg"
                alt="logo"
                title="voot"
              />
            </a>
            <a className="navbar-brand" href="#">
            <img className="line"
            src = "https://www.voot.com/images/upgrade-line.svg"
            alt="Voot Upgrade"
            title="Upgrade"
            />
            </a>

            <button className="btn upgrade-button mx-5" tabindex="0" type="button">
              <span className="">Upgrade</span>
            </button>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="px-3 header-list-active">MyVoot</div>
                </li>
                <li className="nav-item">
                  <div className="px-3 header-list-active"> premium</div>
                </li>
                <li className="nav-item ">
                  <div className="px-3 header-list-active"> Sports</div>
                </li>
                <li className="nav-item">
                  <div className="px-3 header-list-active"> Shows </div>
                </li>
                <li className="nav-item">
                  <div className="px-3 header-list-active"> Movies</div>
                </li>
                <li className="nav-item">
                  <div className="px-3 header-list-active"> Channels</div>
                </li>
                <li className="nav-item">
                  <div className="px-3 header-list-active"> News </div>
                </li>
                <li>
                  <img className="search"
                  
                  src="https://www.voot.com/images/icon_search_white.svg" />
                </li>
                <li>
                  <img  className="user"
                  src="https://www.voot.com/images/userAvatar.svg" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
