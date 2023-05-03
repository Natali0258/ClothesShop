import React, { useState, useContext, useEffect } from 'react';
import { CustomContext } from '../../Context';
import { NavLink } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import ReactSelect from 'react-select';
import Card from '../card/Card';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

const Shop = () => {
   const [sort, setSort] = useState('less')
   const [status, setStatus] = useState('all')
   const [page, setPage] = useState(1)
   const { shop } = useContext(CustomContext)

   const {
      register,
      handleSubmit,
      formState: {
         errors
      },
      setValue,
      control,
      reset
   } = useForm()

   const hangleSort = (event) => {
      setSort(event.target.value);
   }

   return (
      <div className="container">
         <div className="shop">
            <h2 className="title">Магазин</h2>
            <NavLink to="/" className="shop__link-left">Главная</NavLink>
            &#8226;
            <NavLink to="/shop" className="shop__link-right">Контакты</NavLink>

            <ul className="shop__category">
               <li className={`shop__category-item ${status === "all" && "shop__category-item_active"}`} onClick={() => { setStatus('all'); setPage(1) }}>Все</li>
               <li className={`shop__category-item ${status === 'coat' && "shop__category-item_active"}`} onClick={() => { setStatus('coat'); setPage(1) }}>Пальто</li>
               <li className={`shop__category-item ${status === 'costumes' && "shop__category-item_active"}`} onClick={() => { setStatus('costumes'); setPage(1) }}>Костюмы</li>
               <li className={`shop__category-item ${status === 'jeans' && "shop__category-item_active"}`} onClick={() => { setStatus('jeans'); setPage(1) }}>Джинсы</li>
               <li className={`shop__category-item ${status === 'skirts' && "shop__category-item_active"}`} onClick={() => { setStatus('skirts'); setPage(1) }}>Юбки</li>
               <li className={`shop__category-item ${status === 'shirts' && "shop__category-item_active"}`} onClick={() => { setStatus('shirts'); setPage(1) }}>Рубашки</li>
            </ul>

            <section className="shop__products">
               <div className="shop__products-setting">
                  <p className="shop__products-setting-info">Показано {shop.filter(item => status === 'all' ? item : item.category === status)
                     .filter((item, idx) => {
                        return idx + 1 <= page * 9 && idx + 1 > page * 9 - 9
                     }).length} из {shop.filter(item => status === 'all' ? item : item.category === status).length} товаров</p>

                  <div>
                     <label htmlFor="select">сортировать по: </label>
                     <select name="select" id="select"
                        value="sort"
                        onChange={hangleSort}>
                        <option value="less">сначала дешевые</option>
                        <option value="big">сначала дорогие</option>
                     </select>
                  </div>
               </div>

               <div className="shop__products-collection">
                  {shop.sort((a, b) => {
                     if (sort === 'less') {
                        return (a.priceSale || a.price) - (b.priceSale || b.price)
                     } else if (sort === 'big') {
                        return (b.priceSale || b.price) - (a.priceSale || a.price)
                     }
                  }).filter(item => {
                     if (status === 'all') {
                        return item
                     } else {
                        return item.category === status
                     }
                  }).filter((item, idx) => {
                     return idx + 1 <= page * 9 && idx + 1 > page * 9 - 9
                  }).map(item => (
                     <div className="shop__products-collection-card">
                        <Card item={item} />
                     </div>
                  ))
                  }
               </div>
            </section>

            <p className="shop__products-info">Показано {shop.filter(item => status === 'all' ? item : item.category === status)
               .filter((item, idx) => {
                  return idx + 1 <= page * 9 && idx + 1 > page * 9 - 9
               }).length} из {shop.filter(item => status === 'all' ? item : item.category === status).length} товаров</p>

            {
               shop.filter(item => status === 'all' ? item : item.category === status).length > 9 ?
                  <Pagination simple
                     onChange={setPage}
                     pageSize={9}
                     current={page}
                     total={shop.filter(item => status === 'all' ? item : item.category === status).length}
                     className="shop__pagination" /> : ''
            }
         </div>
      </div>
   )
}
export default Shop;
