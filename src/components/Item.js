import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart,setInCart] = useState(false);

  function handleInCart(){
    setInCart((inCart)=>!inCart);
  }
  const cartClass = inCart? "in-cart" : ""
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleInCart}>{inCart?"Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
