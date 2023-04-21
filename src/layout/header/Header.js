import { useContext } from "react";
import { CustomContext } from "../../Context";
import { NavLink, Link } from "react-router-dom";
import bag from '../../images/header-bag.png';
import logo from '../../images/header-logo.svg';
import { useTranslation } from "react-i18next";
import '../../i18n';

const Header = () => {
   const { user, logOutUser } = useContext(CustomContext)

   const { t, i18n } = useTranslation()

   const changesLanguage = (lang) => {
      i18n.changeLanguage(lang)
   }
   return (
      <div className="container">
         <div className="header">
            <div className="header__logo">
               <img className="header__logo-image" src={logo} alt="logo" />
               <span className="header__logo-text">ClothShop</span>
            </div>
            <ul className="header__links">
               <li><NavLink className="header__link" to="/">Главная</NavLink></li>
               <li><NavLink className="header__link" to="/shop">{t("header.link2")}</NavLink></li>
               <li><NavLink className="header__link" to="/brands">{t("header.link3")}</NavLink></li>
               <li><NavLink className="header__link" to="/contact">{t("header.link4")}</NavLink></li>
            </ul>
            <div className="header__contacts">
               <span className="header__contacts-icon"><svg fill="#567a7c" width="15px" height="15px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.194 1.156c1.169 1.612 2.563 3.694 4.175 6.237 0.406 0.688 0.344 1.512-0.181 2.481-0.2 0.406-0.706 1.331-1.512 2.787 0.887 1.25 2.238 2.787 4.056 4.6s3.331 3.169 4.538 4.056c1.45-0.85 2.381-1.369 2.788-1.575 0.525-0.281 1.031-0.425 1.512-0.425 0.363 0 0.688 0.081 0.969 0.244 1.856 1.131 3.956 2.525 6.294 4.175 0.444 0.325 0.694 0.769 0.756 1.331 0.063 0.569-0.113 1.169-0.512 1.819-0.2 0.281-0.525 0.694-0.969 1.244-0.444 0.544-1.113 1.231-2 2.056s-1.613 1.244-2.181 1.244h-0.063c-4.269-0.169-9.531-3.369-15.762-9.6-6.237-6.238-9.438-11.494-9.6-15.769 0-0.563 0.412-1.3 1.244-2.212 0.825-0.906 1.506-1.563 2.025-1.969 0.525-0.4 0.969-0.725 1.331-0.969 0.444-0.325 0.95-0.481 1.513-0.481 0.694 0 1.212 0.244 1.581 0.725zM6.194 2.425c-0.85 0.606-1.644 1.287-2.394 2.031-0.744 0.75-1.181 1.3-1.3 1.662 0.163 3.756 3.156 8.537 8.988 14.35s10.625 8.819 14.375 9.019c0.325-0.119 0.856-0.563 1.606-1.331s1.425-1.575 2.025-2.419c0.119-0.163 0.163-0.3 0.119-0.425-2.419-1.694-4.438-3.044-6.056-4.056-0.163 0-0.363 0.063-0.606 0.181-0.363 0.2-1.269 0.706-2.725 1.512l-1.031 0.606-1.031-0.669c-1.331-0.925-2.944-2.363-4.844-4.3-1.894-1.894-3.306-3.512-4.238-4.844l-0.725-0.969 0.606-1.088c0.806-1.45 1.313-2.363 1.512-2.725 0.119-0.244 0.181-0.444 0.181-0.606-1.438-2.294-2.769-4.313-3.981-6.050h-0.063c-0.156 0-0.3 0.044-0.419 0.119z"></path>
               </svg></span>
               <a className="header__contacts-phone" href="tel:+7(913)333-33-33">+7(913)333-33-33</a>
               <Link to="/cart" className="header__contacts-image">
                  <img className="header__contacts-image" src={bag} alt="bag" />
               </Link>
               <div className="header__contacts-lang">
                  <button type="button" className="header__contacts-lang-ru" onClick={() => changesLanguage("ru")}>ru</button>
                  <button type="button" className="header__contacts-lang-en" onClick={() => changesLanguage("en")}>en</button>
               </div>

               {
                  (user && user.login.length > 0) ?
                     <Link to="/" onClick={() => logOutUser()}>Выйти</Link> :
                     <Link to="/login">Войти</Link>
               }
            </div>
         </div>
      </div>
   )
}
export default Header;