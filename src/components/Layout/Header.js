import React from "react";

export const Header = () => {
  return (
    <div className="Header py-3 px-5">
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid custom-nav d-flex justify-content-between">
          <div>
            <a class="navbar-brand" href="#">
              <img
                src="https://www.voot.com/images/Voot-Logo.svg"
                alt="logo"
                title="voot"
              />
            </a>

            <button className="btn upgrade-button mx-5" tabindex="0" type="button">
              <span class="">Upgrade</span>
            </button>
          </div>
          <div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <div className="px-3 header-list-active">MyVoot</div>
                </li>
                <li class="nav-item">
                  <div className="px-3 header-list"> premium</div>
                </li>
                <li class="nav-item ">
                  <div className="px-3 header-list"> Sports</div>
                </li>
                <li class="nav-item">
                  <div className="px-3 header-list"> Shows </div>
                </li>
                <li class="nav-item">
                  <div className="px-3 header-list"> Movies</div>
                </li>
                <li class="nav-item">
                  <div className="px-3"> Channels</div>
                </li>
                <li class="nav-item">
                  <div className="px-3"> News </div>
                </li>
                <li>
                  <img src="https://www.voot.com/images/icon_search_white.svg" />
                </li>
                <li>
                  <img src="https://www.voot.com/images/userAvatar.svg" />
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
