import React from "react";
import { useStateContext } from '../../components/cart/CartList'



const Cart = ()=>{
    const { cartList } = useStateContext();
    console.log(cartList);

    return (
        <div>
             <h4>Grocery List</h4>
             {cartList.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartList.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <div>{item.list.map((item) => {return item === "" ? item : `${item},  `;})}</div>
            </li>
          ))}
        </div>
      )}
        </div>

    )
}

export default Cart;