import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <input type="text" placeholder="search products..." />
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      {/* outlet mouhhemmeta tezherle mo7tawa lchild */}
      <Outlet />
    </>
  );
};

export default Product;
