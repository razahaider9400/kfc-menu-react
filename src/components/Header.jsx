import React, { useState } from "react";

const Header = ({ cart, updateCart, total, placeOrder }) => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-black bg-black pt-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            KFC
          </a>
          <div className="me-auto">
            <button className="custom-btn">DELIVERY</button>
            <button className="custom-btn ms-2">PICKUP</button>
          </div>

          <div className="ms-auto">
            <i
              className="bi bi-bag fs-1 mt-5 cart-icon"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartOffCanvas"
            ></i>
            <p
              className="cart-count fs-5"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartOffCanvas"
            >
              {cart.length}
            </p>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end bg-dark text-white"
        tabIndex="-1"
        id="cartOffCanvas"
      >
        <div className="offcanvas-header">
          <h3></h3>
          <button
            type="button"
            className="btn-close text-reset btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <h3>Cart Details</h3>
          {cart.map((c) => {
            return (
              <div key={c.id} className="card p-0 bg-black my-3">
                <div className="card-body">
                  <h5 className="text-center">{c.title}</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      className="d-block me-auto"
                      width="100"
                      src={c.image}
                      alt=""
                    />

                    <button
                      className="btn btn-danger col-2 text-white"
                      onClick={() => updateCart(c, 1)}
                    >
                      <i className="bi bi-plus text-white fs-5 fw-bold"></i>
                    </button>
                    <button disabled className="bg-black text-white col-2 py-2">
                      {c.qty}
                    </button>
                    <button
                      className="btn btn-danger col-2 text-white"
                      onClick={() => updateCart(c, 1, true)}
                    >
                      <i className="bi bi-dash text-white fs-5 fw-bold"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {cart.length > 0 ? (
            <h5 className="text-center mt-5 mb-2">Total = {total}</h5>
          ) : (
            <p className="mt-5"> Cart is empty</p>
          )}

          <button
            className="col-10 mx-auto btn btn-danger text-white py-2 cart-button"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
