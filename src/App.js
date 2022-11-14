import { useState } from 'react';
import Meals from './Meal/Meals';
import './App.css';
import Header from "./Layout/Header";
import Cart from './Cart/cart';
import CartProvider from './store/CartProvider';

import LastConfirm from './Layout/lastConfirm';
const App = props => {


  const [cartCheck, cartHandler] = useState(false);
  const againactivate = event => {
    cartHandler(true);
  }
  const deacivate = () => {
    cartHandler(false);
  }
  return (
    <CartProvider>
      {cartCheck && <Cart onClick={deacivate}></Cart>}
      {/* <LastConfirm></LastConfirm> */}
      <Header againactivate={againactivate}></Header>
      <Meals></Meals>
    </CartProvider>

  );
}

export default App;