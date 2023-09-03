import React from "react";
import ProductCards from "./ProductCards";

const AllProducts = ({ products, cat, updateCart }) => {
  return (
    <>
      {cat.map((c) => (
        <div key={c.id}>
          {c.id >= 1 ? (
            <div className=" section-gap" >
              <h4 className="text-white text-start my-5 fw-bold">{c.title}</h4>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
                {products.map((p) => (
                  <ProductCards
                    key={p.id}
                    product={p}
                    catId={c.id}
                    updateCart={updateCart}
                  />
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default AllProducts;
