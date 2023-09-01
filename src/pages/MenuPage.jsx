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
  const [total, setTotal] = useState(0);
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
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            })
            .then((result) => {
              if (result.isConfirmed) {
                setCart(newCart.filter((c) => c.id !== findProduct.id));
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
        }
      } else {
        findProduct.qty = findProduct.qty + qty;
        setCart(newCart);
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

    let sum = cart.reduce(function (prev, current) {
      return prev + +current.price * current.qty;
    }, product.price * qty);

    setTotal(sum);
  };

  return (
    <>
      <Header
        cart={cart}
        updateCart={updateCart}
        total={total}
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
