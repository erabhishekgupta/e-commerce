import { useState } from 'react'
import './index.css';

import Navi from "./customer/component/navigation/Navi";

import Homepage from './customer/pages/Homepage/Homepage';
import Footer from './customer/component/Footer/Footer';
import Product from './customer/component/Product/Product';
import ProductDetail from './customer/component/ProductDetail/ProductDetail';
import CartItem from './customer/component/Cart/CartItem';
import Cart from './customer/component/Cart/Cart';
import Checkout from './customer/component/Checkout/Checkout';






function App() {
  return (
    <>
      <div classname="">
        <Navi/>
        {/* <div><Homepage /></div> */}
        {/* <div><Product/></div> */}
        {/* <ProductDetail/> */}
        {/* <CartItem/> */}
        {/* <Cart/> */}
        <Checkout/>
        <Footer/>
      </div>

    </>




  )
}

export default App;

