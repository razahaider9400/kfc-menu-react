import React from "react";

const CategoryBtn = ({ categories, clickedButton, catId }) => {
  return (
    <>
      <button
        className={
          catId === categories.id ? "btn cat-btn bg-danger mx-2" : "btn cat-btn mx-2"
        }
        onClick={() => clickedButton(categories)}
      >
        {categories.title}
      </button>
    </>
  );
};

export default CategoryBtn;
