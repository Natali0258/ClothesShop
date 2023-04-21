import React from 'react'

const Shop = () => {
   return (
      <div className="container">
         <div className="shop">
            <h2 className="shop__title">Магазин</h2>
            <section className="shop__category">
               <button className="shop__category-button btn">Все</button>
               <button className="shop__category-button btn">Пальто</button>
               <button className="shop__category-button btn">Костюмы</button>
               <button className="shop__category-button btn">Джинсы</button>
               <button className="shop__category-button btn">Юбки</button>
               <button className="shop__category-button btn">Рубашки</button>
            </section>

            <section className="shop__products">
               <p className="shop__products-info">Показано 9 из 12 товаров</p>
               {/* {data.map(item => (
                  <div key="item.id" className="shop__products-card">
                     <img className="shop__products-card-image" src="item.image" alt="item.title" />
                     <p className="shop__products-card-title">{item.title}</p>
                     <p className="shop__products-card-price">{item.price}</p>
                  </div>
               ))
               } */}
            </section>
         </div>
      </div>
   )
}
export default Shop;
