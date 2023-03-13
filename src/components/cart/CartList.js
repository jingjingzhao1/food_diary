import React from 'react';
import { useState,createContext, useContext} from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const onAdd = (name, list) => {
        console.log(name,list)
        setCartList([...cartList, { name, list }]);
       
    } 

    console.log(cartList)
    
    const state = { cartList, onAdd };
      return (
        <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
      )
}

export const useStateContext = () => useContext(StateContext);
/*
const CartList = (n, l) => {
    const [cartList, setcartList] = useState([]);
    
    
        const checkProductInCart = cartList.find((item) => item.name === n);
        if(!checkProductInCart){
            setcartList([...cartList,{...n,...l}])
        }

       

    console.log(cartList);
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        cartList
      </ul>
    </div>
  );
};

export default CartList;
*/