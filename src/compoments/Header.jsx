import React from 'react';
import Logo from "../assets/images/logo.webp";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdLocalGroceryStore } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={Logo} alt="logo" />
          </div>
          <div className="col-md-7">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Thương hiệu nổi bật</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Sản phẩm</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Liên hệ</a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
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
                </div>
              </div>
            </nav>
          </div>
          <div className="col-md-2 mt-1">
            <FaRegUser style={{ fontSize: "24px", marginRight: "15px" }} />
            <CiHeart style={{ fontSize: "24px", marginRight: "15px" }} />
            <MdLocalGroceryStore style={{ fontSize: "24px", marginRight: "15px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
