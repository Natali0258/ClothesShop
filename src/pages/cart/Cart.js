import React, { useContext, useState } from 'react'
import { CustomContext } from '../../Context';
import { NavLink, useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
   const { cart, setCart } = useContext(CustomContext)
   const [value, setValue]=useState('')
   const [discount, setDiscount]=useState(false)

   const navigation = useNavigate()

   const total = cart.reduce((sum,item)=>sum +item.price*item.count,0)
   const discountTotal = total - total*20/100

   return (
      <div className="container">
         <div className="cart">
            <h2 className="title">Корзина</h2>
            <div className="cart__link">
               <NavLink to="/" className="cart__link-left link">Главная</NavLink>
               &#8226;
               <p className="cart__link-right current">Магазин</p>
            </div>

            <table className="cart__table">
               <thead>
                  <tr className="cart__table-title">
                     <th>Товар</th>
                     <th>Размер</th>
                     <th>Цвет</th>
                     <th>Цена</th>
                     <th>Количество</th>
                     <th>Всего</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     cart.map((item, idx) => (
                        //key не может быть id, т.к. в корзине может быть выбран несколько раз товар с одним и тем же id
                        <CartItem key={item} item={item} />
                     ))
                  }
               </tbody>
            </table>
            <div className="cart__form">
               <div>
                  <input type="text" placeholder="Введите купон" value={value}
                     className="cart__form-input"
                     onChange={(e)=>setValue(e.target.value)} />
                  <button type="button" className="cart__form-btn button" onClick={(e)=>{
                     if(value === "it"){
                        console.log("discount", discount)
                        setDiscount(true)
                     }
                  }}>Применить купон</button>
               </div>
               <button type="button" className="cart__form-btn button" onClick={()=>setCart([])}>Очистить корзину</button>
            </div>
            <div className="cart__results">
               <div>
                  {
                     discount && <p className="cart__results-text">После применения купона <br /> у вас скидка в размере 20%</p>
                  }
               </div>
               <div className="cart__results-right">
                  <div className="cart__results-right-subresult">
                     <p>Подитог: </p>
                     <div>{ total} руб.</div>
                  </div>

                  <div className="cart__results-right-result">
                     <div className="cart__results-right-result-sum">
                        <p>Итого: </p>
                        <div>
                           {!discount && total } 
                           {discount && discountTotal } руб.
                        </div>
                     </div>
                     <button className="cart__results-right-result-btn button-dark" type="button"
                        onClick={() => navigation('/checkout')}>Оформить заказ</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Cart;