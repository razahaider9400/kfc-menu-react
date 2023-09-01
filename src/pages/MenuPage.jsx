import React, { useState } from "react";
import Header from "../components/Header";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import categories from "../data/categories.json";
import products from "../data/products.json";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [title, setTitle] = useState(categories[0].title);
  const [cart, setCart] = useState([]);

  const [swalProps, setSwalProps] = useState({});

  const categoryButton = (cat) => {
    setSelectedCategory(cat.id);
    setTitle(cat.title);
  };

  const placeOrder = () => {
    setCart([]);
    swal.fire({
      show: true,
      position: "center",
      icon: "success",
      title: "Order placed successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const updateCart = (product, qty, minus = false) => {
    let newCart = [...cart];
    let findProduct = newCart.find((e) => e.id === product.id);
    if (findProduct) {
      if (minus) {
        if (findProduct.qty > 1) {
          findProduct.qty = findProduct.qty - qty;
          setCart(newCart);
        } else {
          swal
            .fire({
              title: "Are you sure?",
              text: "You want to remove the item from the cart!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, remove it!",
            })
            .then((result) => {
              if (result.isConfirmed) {
                setCart(newCart.filter((c) => c.id !== findProduct.id));
                Swal.fire("Removed!", "Item removed from cart.", "success");
              }
            });
        }
      } else {
        findProduct.qty = findProduct.qty + qty;
        setCart(newCart);
        swal.fire({
          show: true,
          position: "center",
          icon: "success",
          title: "Product added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      setCart([...cart, { ...product, qty }]);
      swal.fire({
        show: true,
        position: "center",
        icon: "success",
        title: "Product added to cart",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <Header
        cart={cart}
        updateCart={updateCart}
        placeOrder={placeOrder}
      />
      <Categories
        categories={categories}
        clickedButton={categoryButton}
        catId={selectedCategory}
      />
      <Products
        products={products}
        catId={selectedCategory}
        catTitle={title}
        updateCart={updateCart}
      />
    </>
  );
};

export default MenuPage;
