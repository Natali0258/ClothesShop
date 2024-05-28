import { NavLink, useNavigate } from "react-router-dom";
import checkbox from "../../images/order-checkbox.png";

const Order = () => {
    const navigation = useNavigate()
    return(
        <div className="container">
            <div className="order">
            <h2 className="title">Заказ получен</h2>
            <div className="order__link">
                <NavLink to="/" className="order__link-left link">Главная</NavLink>
                    &#8226;
                <NavLink to="/checkout" className="order__link-right link">Оформление заказа</NavLink>
                    &#8226;
                <p className="order__link-title current">Заказ получен</p>
            </div>

            <div className="order__content">
                <div  className="order__content-info">
                    <img className="order__content-info-image" src={checkbox} alt="checkbox" />
                    <div className="order__content-info-text">
                        <h3>Заказ успешно оформлен</h3>
                        <p>Мы свяжемся с вами в ближайшее время!</p>
                    </div>
                </div>
                <button className="order__content-btn button" onClick={()=>navigation('/')}>Перейти на главную</button>
            </div>
            </div>
        </div>
    )
}
export default Order;