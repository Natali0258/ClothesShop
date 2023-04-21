import React from 'react';
import idea from '../../images/brands-idea.jpg';
import magic from '../../images/brands-magic.jpg';

const Brands = () => {
   return (
      <div className="container">
         <div className="brands">
            <h2 className="brands__title">О бренде</h2>
            <section className="brands__idea">
               <img className="brands__idea-image" src={idea} alt="idea" />
               <div className="brands__idea-info">
                  <h3 className="brands__idea-info-title">Идея и женщина</h3>
                  <p className="brands__idea-info-text">ClothShop была основана в 2010-м году и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, ClothShop остается семейной компанией, хотя ни один из членов семьи не является модельером. Мы действуем по успешной формуле, прибегая к услугам успешных модельеров для создания своей коллекции. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского сотворчества, характерная для ряда итальянских pred-a-porter компаний.</p>
               </div>
            </section>

            <section className="brands__magic">
               <div className="brands__magic-info">
                  <h3 className="brands__magic-info-title">Магия в деталях</h3>
                  <p className="brands__magic-info-text">Первый магазин ClothShop был открыт в маленьком городке на севере страны в 2010-м году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей. Несмотря на то, что по образованию основательница была адвокатом, её семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного pred-a-porter попросту не существовало.</p>
               </div>
               <img className="brands__magic-image" src={magic} alt="" />
            </section>

            <div className="brands__button">
               <button className="brands__button-btn">Перейти в магазин</button>
            </div>

         </div>
      </div>
   )
}
export default Brands;