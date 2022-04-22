import React, { useState } from "react";
import { BsSearch, BsCameraReels } from "react-icons/bs";
import { RiHome2Line } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineBook } from "react-icons/ai";

function SideBar() {
  const [expand, setExpand] = useState(false);
  return (
    <div
      style={{ flex: expand ? 2 : 1 }}
      className="bg-dark"
      onClick={() => setExpand(!expand)}
    >
      <div className="header-nav text-center p-5">
        <div className="header-logo1">
          <h2 className="fw-bold fs-2 text-light">Voot</h2>
        </div>
      </div>
      <div className="sidebar-nav d-flex flex-column align-items-center justify-content-center ">
        {expand ? (
          <ul className="sidebar-icon-label">
            <li className="d-flex align-items-center p-2 text-light">
              <BsSearch size={25} />{" "}
              <strong className="fw-bolder fs-2 ms-3 "> label 1 </strong>
            </li>
            <li className="d-flex align-items-center p-2 text-light">
              <RiHome2Line size={25} />{" "}
              <strong className="fw-bolder fs-2 ms-3"> label 1 </strong>
            </li>
            <li className="d-flex align-items-center p-2 text-light">
              <BsCameraReels size={25} />{" "}
              <strong className="fw-bolder fs-2 ms-3"> label 1 </strong>
            </li>
            <li className="d-flex align-items-center p-2 text-light">
              <RiHome2Line size={25} />{" "}
              <strong className="fw-bolder fs-2 ms-3"> label 1 </strong>
            </li>
            <li className="d-flex align-items-center p-2 text-light">
              <AiOutlineBook size={25} />{" "}
              <strong className="fw-bolder fs-2 ms-3"> label 1 </strong>
            </li>
            <li className="d-flex align-items-center p-2 text-light">
              <BiUserCircle size={25} />{" "}
              <strong className="fw-bolder fs-2 ms-3"> label 1 </strong>
            </li>
          </ul>
        ) : (
          <ul className="sidebar-icon">
            <li className="d-flex align-items-center p-2 mb-3 text-light">
              <BsSearch size={25} />
            </li>
            <li className="d-flex align-items-center p-2 mb-3 text-light">
              <RiHome2Line size={25} />
            </li>
            <li className="d-flex align-items-center p-2 mb-3 text-light">
              <BsCameraReels size={25} />
            </li>
            <li className="d-flex align-items-center p-2 mb-3 text-light">
              <AiOutlineBook size={25} />
            </li>
            <li className="d-flex align-items-center p-2 mb-3 text-light">
              <RiHome2Line size={25} />
            </li>
            <li className="d-flex align-items-center p-2 mb-3 text-light">
              <BiUserCircle size={25} />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default SideBar;
