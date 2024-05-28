import React, { useContext, useState } from 'react'
import { CustomContext } from '../../Context';
import { NavLink, useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import axios from 'axios';

const Cart = () => {
   const { cart, setCart, ticket, setTicket} = useContext(CustomContext)

   const navigation = useNavigate()

   const useTicket=(e)=>{
      e.preventDefault()
      axios(`http://localhost:3001/tickets?title=${e.target[0].value}`)
      .then(({data})=> {
         if(data.length){
            setTicket(data)
         }else{
            setTicket('По данному промокоду скидок нет')
         }
      })
   }

   const total = cart.reduce((sum,item)=>sum +item.price*item.count,0)
   //const discountTotal = total - total*20/100

   return (
      <section className="cart">
         <div className="container">
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
                        //key не может быть id, т.к. в корзине может быть выбран несколько раз товар с одним и тем же id, но разные цвета и размеры
                        <CartItem key={idx} item={item} />
                     ))
                  }
               </tbody>
            </table>
            <div className="cart__form">
               <form onSubmit={useTicket}>
                  <input type="text" placeholder="Введите купон" className="cart__form-input" />
                  <button type="submit" className="cart__form-btn button">Применить купон</button>
               </form>
               <button type="button" className="cart__form-btn button" onClick={()=>setCart([])}>Очистить корзину</button>
            </div>
            <div className="cart__results">
               <div>
                  {
                     Array.isArray(ticket) && ticket.length ? <p className="cart__results-text">По данному промокоду <br /> вы получаете скидку в размере {ticket[0].sum}%</p>
                     : <p className="cart__results-text">{ticket}</p>
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
                        <div>{Array.isArray(ticket) && ticket.length ? total - total*ticket[0].sum/100 : total} руб.</div>
                     </div>
                     <button className="cart__results-right-result-btn button-dark" type="button"
                        onClick={() => navigation('/checkout')}>Оформить заказ</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
export default Cart;