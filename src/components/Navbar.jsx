import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSearchedProducts } from "../toolkit/productSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleSearchProduct = debounce((value) => {
    if (value.length > 3) {
      console.log(value);
      dispatch(getSearchedProducts(value));
    } else {
      getSearchedProducts("")
    }
  }, 300);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light mb-5">
        <div className="container">
          <Link className="navbar-brand" href="#">
            <div className="d-flex">
              <h2>Products App</h2>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink exact className="nav-link" activeClassName="active" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" activeClassName="active" to="/category">
                Category
              </NavLink>
            </div>
          </div>
          {location.pathname == "/" && <input type="text" className="form-control" placeholder="Search products..." style={{ maxWidth: '300px' }} onChange={(e) => handleSearchProduct(e.target.value)} />}
        </div>
      </nav>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
