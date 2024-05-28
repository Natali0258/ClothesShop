import React, { useContext, useState } from 'react';
import { CustomContext } from '../../Context';
import logo from '../../images/header-logo.svg';
import { NavLink } from 'react-router-dom';
import instagram from '../../images/footer-instagram.svg';
import facebook from '../../images/footer-facebook.svg';
import twitter from '../../images/footer-twitter.svg';
import visa from '../../images/footer-visa.png';
import mastercard from '../../images/footer-mastercard.svg';

const Footer = () => {
   const { status, setStatus } = useContext(CustomContext)
   const [page, setPage] = useState(1)
   return (
      <div className="wrapper">
         <div className="container">
            <div className="footer">
               <div className="footer__left">
                  <div className="footer__left-logo">
                     <img className="footer__left-logo-image" src={logo} alt="logo" />
                     <span className="footer__left-logo-text">ClothesShop</span>
                  </div>
                  <p className="footer__left-text">&#169; Все права защищены</p>
                  <p className="footer__left-text">Политика конфинденциальности</p>
                  <p className="footer__left-text">Публичная оферта</p>
               </div>

               <ul className="footer__links">
                  <li className="footer__link-item"><NavLink className="footer__link" to="/">Главная</NavLink></li>
                  <li className="footer__link-item"><NavLink className="footer__link" to="/shop">Магазин</NavLink>
                     <ul className="footer__link-item-shop">
                        <li className="footer__link-item-shop-status"><NavLink className={`footer__status ${status === 'coat' && "footer__status_active"}`} to="/shop" onClick={() => { setStatus('coat'); setPage(1) }}>Пальто</NavLink></li>
                        <li className="footer__link-item-shop-status"><NavLink className={`footer__status ${status === 'costumes' && "footer__status_active"}`} to="/shop" onClick={() => { setStatus('costumes'); setPage(1) }}>Костюмы</NavLink></li>
                        <li className="footer__link-item-shop-status"><NavLink className={`footer__status ${status === 'jeans' && "footer__status_active"}`} to="/shop" onClick={() => { setStatus('jeans'); setPage(1) }}>Джинсы</NavLink></li>
                        <li className="footer__link-item-shop-status"><NavLink className={`footer__status ${status === 'skirts' && "footer__status_active"}`} to="/shop" onClick={() => { setStatus('skirts'); setPage(1) }}>Юбки</NavLink></li>
                        <li className="footer__link-item-shop-status"><NavLink className={`footer__status ${status === 'shirts' && "footer__status_active"}`} to="/shop" onClick={() => { setStatus('shirts'); setPage(1) }}>Рубашки</NavLink></li>
                     </ul>
                  </li>
                  <li className="footer__link-item"><NavLink className="footer__link" to="/brands">О бренде</NavLink></li>
                  <li className="footer__link-item"><NavLink className="footer__link" to="/contact">Контакты</NavLink></li>
               </ul>

               <div className="footer__contacts">
                  <a className="footer__contacts-phone" href="tel:+7(913)333-33-33">+7(913)333-33-33</a>
                  <a className="footer__contacts-email" href=" ">hello@clothshop.com</a>
                  <div className="footer__contacts-networks">
                     <img className="footer__contacts-networks-item" src={instagram} alt="instagram" />
                     <img className="footer__contacts-networks-item" src={facebook} alt="facebook" />
                     <img className="footer__contacts-networks-item" src={twitter} alt="twitter" />
                  </div>
                  <div className="footer__contacts-pay">
                     <img className="footer__contacts-pay-visa" src={visa} alt="visa" />
                     <div className="footer__contacts-pay-mastercard">
                        <img className="footer__contacts-pay-mastercard-logo" src={mastercard} alt="mastercard" />
                        <p className="footer__contacts-pay-mastercard-text">MASTERCARD</p>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Footer;