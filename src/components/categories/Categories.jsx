import React from "react";
import CategoryBtn from "./CategoryBtn";

const Categories = ({ categories, clickedButton, catId }) => {
  return (
   
      <div className="pb-3 cat-gap bg-black"
      style={{ overflowX: "auto" }}>
        {categories.map((cat) => (
          <CategoryBtn categories={cat} key={cat.id} clickedButton={clickedButton} catId={catId} />
        ))}
      </div>
 
  );
};

export default Categories;
