import React from "react";

function Product({ age, data }) {
  return (
    <>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      <h1>{data.coder}</h1>
    </>
  );
}
export default Product;
