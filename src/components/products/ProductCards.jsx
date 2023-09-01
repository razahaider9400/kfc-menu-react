import React, { useState } from "react";

const ProductCards = ({ product, catId, updateCart }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  if (product.category_id === catId) {
    return (
      <>
        <div className="col">
          <div className="card product-card p-0 mx-auto">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body text-start">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {product.description.length >= 50
                  ? "${product.description.substring(0, 50)}..."
                  : product.description}
              </p>
              <p>Rs. {product.price}</p>
            </div>
            <div className="p-0 m-0">
              <button
                className="btn product-btn"
                data-bs-toggle="offcanvas"
                data-bs-target={`#offcanvasRight${product.id}`}
              >
                + ADD TO BUCKET
              </button>
            </div>
          </div>
        </div>
        <div
          className="offcanvas offcanvas-end bg-dark text-white"
          tabIndex="-1"
          id={`offcanvasRight${product.id}`}
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
            <h3 className="text-center">{product.title}</h3>
            <div>
              <img src={product.image} height="250" alt="" />
            </div>
            <h5 className="mt-5">{product.description}</h5>
            <h4 className="py-4 text-muted">Rs. {product.price * count}</h4>
            <div className="d-flex align-items-center justify-content-center mt-5">
              <button
                className="btn btn-danger col-2 py-2 text-white  rounded-pill"
                onClick={increment}
              >
                <i className="bi bi-plus text-white fs-5 fw-bold"></i>
              </button>
              <button disabled className="bg-black text-white py-2 col-3 fs-5">
                {count}
              </button>
              <button
                className="btn btn-danger col-2 py-2 text-white  rounded-pill"
                onClick={decrement}
              >
                <i className="bi bi-dash text-white fs-5 fw-bold"></i>
              </button>
            </div>
            <button
              className="col-10 mx-auto btn btn-danger text-white py-2 cart-button"
              onClick={() => updateCart(product, count)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default ProductCards;
