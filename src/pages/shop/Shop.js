import React, { useState, useContext } from 'react';
import { CustomContext } from '../../Context';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import ReactSelect from 'react-select';
import Card from '../card/Card';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

const Shop = () => {
   const [sort, setSort] = useState('less')
   const [page, setPage] = useState(1)
   const { shop, status, setStatus, user } = useContext(CustomContext)
   const navigate = useNavigate()

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

   const showCount = shop.filter(item => status === 'all' ? item : item.category === status)
                           .filter(item => sort === 'discount'? item.priceSale : item)
                           .filter((item, idx) => idx + 1 <= page * 9 && idx + 1 > page * 9 - 9).length

   const showCountLength = shop.filter(item => status === 'all' ? item : item.category === status).length

   return (
      <div className="shop">
         <div className="container">
            <h2 className="title">Магазин</h2>
            <div className="shop__links">
               <NavLink to="/" className="shop__links-link link">Главная</NavLink>
               &#8226;
               <p className="shop__links-link current">Магазин</p>
            </div> 

            <ul className="shop__category">
               <li className={`shop__category-item ${status === "all" && "shop__category-item_active"}`} onClick={() => {
                  setStatus('all');
                  setPage(1)
               }}>Все</li>
               <li className={`shop__category-item ${status === 'coat' && "shop__category-item_active"}`} onClick={() => {
                  setStatus('coat');
                  setPage(1)
               }}>Пальто</li>
               <li className={`shop__category-item ${status === 'costumes' && "shop__category-item_active"}`} onClick={() => {
                  setStatus('costumes');
                  setPage(1)
               }}>Костюмы</li>
               <li className={`shop__category-item ${status === 'jeans' && "shop__category-item_active"}`} onClick={() => {
                  setStatus('jeans');
                  setPage(1)
               }}>Джинсы</li>
               <li className={`shop__category-item ${status === 'skirts' && "shop__category-item_active"}`} onClick={() => {
                  setStatus('skirts');
                  setPage(1)
               }}>Юбки</li>
               <li className={`shop__category-item ${status === 'shirts' && "shop__category-item_active"}`} onClick={() => {
                  setStatus('shirts');
                  setPage(1)
               }}>Рубашки</li>
            </ul>

            <section className="shop__products">
               <div className="shop__products-setting">
                  { 
                  user.email === 'admin@mail.ru' ?
                  <button type='button' className="shop__products-setting-add button"
                  onClick={() => navigate('/create')}>Добавить товар</button>
                  : <span> </span>
                  }
                  
                  <div className="shop__products-setting-sort">
                     <h4 className="shop__products-setting-sort-title">сортировать по цене: </h4>
                     <div className="shop__products-setting-sort-buttons">
                        <button type="button"
                           className={`shop__products-setting-sort-buttons-btn button ${sort === "less" && "shop__products-setting-sort-buttons-btn_active"}`}
                           onClick={() => setSort("less")}>сначала дешевые</button>
                        <button type="button"
                           className={`shop__products-setting-sort-buttons-btn button ${sort === "big" && "shop__products-setting-sort-buttons-btn_active"}`}
                           onClick={() => setSort("big")}>сначала дорогие</button>
                     </div>
                  </div>
                  <button type="button" className={`shop__products-setting-discount button ${sort === "discount" && "shop__products-setting-discount_active"}`}
                     onClick={() => setSort("discount")}>скидки</button>
               </div>
               <p className="shop__products-setting-info">Показано {showCount} из {showCountLength} товаров</p>

               <div className="shop__products-collection">
                  {/* если есть priceSale, то он учавствует в сортировке, если нет priceSale, то в сортировке учавствует price */}
                  {shop.sort((a, b) => {
                     if (sort === 'less') {
                        return (a.priceSale || a.price) - (b.priceSale || b.price)
                     } else if (sort === 'big') {
                        return (b.priceSale || b.price) - (a.priceSale || a.price)
                     }
                  }).filter(item => sort === 'discount'? item.priceSale : item)
                     .filter(item => {
                        if (status === 'all') {
                           return item
                        } else {
                           return item.category === status
                        }
                     }).filter((item, idx) => {
                        return idx + 1 <= page * 9 && idx + 1 > page * 9 - 9
                     }).map(item => (
                        <div key={item.id} className="shop__products-collection-card">
                           <Card item={item} />
                        </div>
                     ))
                  }
               </div>
            </section>

            <p className="shop__products-info">Показано {showCount} из {showCountLength} товаров</p>

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
