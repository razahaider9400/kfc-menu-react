import React from "react";
import ProductCards from "./ProductCards";

const Products = ({ products, catId, catTitle, updateCart }) => {
  return (
    <div className=" section-gap">
      <h4 className="text-white text-start my-4 fw-bold">{catTitle}</h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
        {products.map((p) => (
          <ProductCards
            key={p.id}
            product={p}
            catId={catId}
            updateCart={updateCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
