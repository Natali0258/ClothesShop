import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';
import Cart from '../pages/cart/Cart';
import Checkout from '../pages/checkout/Checkout';
import Order from '../pages/order/Order';
import Profile from '../pages/profile/Profile';
import Brands from '../pages/brands/Brands';
import NotFaund from '../pages/notFaund/NotFaund';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Product from '../pages/product/Product';
import AdminPanel from '../pages/adminPanel/AdminPanel';
import { CustomContext } from '../Context';
import CreateProduct from '../pages/createProduct/CreateProduct';

const Layout = () => {
   const location = useLocation()
   const {user} = useContext(CustomContext)

   return (
      <div>
         {location.pathname !== '/login' && location.pathname !== "/register" ? <Header /> : ""}

         <Routes>
            {user.email !== "admin@mail.ru" && <Route path="/" element={<Home />} />}
            <Route path="/shop" element={<Shop />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<Order />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {
               user.email === "admin@mail.ru" &&
               <>
                  <Route path="/*" element={<AdminPanel />} />
                  <Route path="/create" element={<CreateProduct />} />
               </>   
            }
            <Route path="*" element={<NotFaund />} />
         </Routes>
         {location.pathname === '/login'
            || location.pathname === '/register'
            ? "" : <Footer />
         }
      </div>
   )
}
export default Layout;