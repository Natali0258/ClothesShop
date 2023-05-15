import React, { useContext, useRef, useState } from 'react'
import { CustomContext } from '../../Context';
import { NavLink, useNavigate } from 'react-router-dom';

const Cart = () => {
   const { shop } = useContext(CustomContext)
   const [number, setNumber]=useState([])
   const inputRef=React.useRef()
   const navigation=useNavigate()

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
                  <th>Цена</th>
                  <th>Количество</th>
                  <th>Всего</th>
               </tr>
               </thead>
               <tbody>
               {
                  shop.map(item=>(
                     <tr key={item.id} className="cart__table-rows">
                        <td><img src={item.image[0]} alt='item.title' className="cart__table-rows-image" />{item.title}</td>
                        <td>{item.price }</td>
                        <td><input type="number" min="1" defaultValue={1} className="cart__table-rows-input" 
                           ref={inputRef} onClick={()=>setNumber(inputRef.current.value)} /></td>
                        <td>{item.price*number[item.id] }</td>
                     </tr>
                  ))
               }
               </tbody>
            </table>
            <div className="cart__form">
               <div>
                  <input type="text" placeholder="Введите купон" className="cart__form-input outinput" />
                  <button type="button" className="cart__form-btn button">Применить купон</button>
               </div>
               <button type="button" className="cart__form-btn button">Обновить корзину</button>
            </div>
            <div className="cart__results">
               <div></div>
               <div className="cart__results-right">
                  <div className="cart__results-right-subresult">
                     <p>Подитог: </p>
                     <div>{}</div>
                  </div>

                  <div className="cart__results-right-result">
                     <div className="cart__results-right-result-sum">
                        <p>Итого: </p>
                        <div>{ }</div>
                     </div>
                     <button className="cart__results-right-result-btn button-dark" type="button"
                        onClick={()=>navigation('/order')}>Оформить заказ</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Cart;