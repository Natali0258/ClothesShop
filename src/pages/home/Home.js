import { useContext } from 'react';
import { CustomContext } from '../../Context';
import { useTranslation } from 'react-i18next';
import Card from '../card/Card';
import quality from '../../images/home-quality.png';
import speed from '../../images/home-speed.png';
import responsibility from '../../images/home-responsibility.png';
import { Link, useNavigate } from 'react-router-dom';
import Slider from './Slider.js';

const Home = () => {
   //const { t, i18n } = useTranslation();
   const { count, setCount, user, shop } = useContext(CustomContext)
   const novigate = useNavigate()

const collection = shop.slice(-3,shop.length) //в качестве новой коллекции выводим последние три элемента массива

   return (
      <div className="home">
         <div className="container">
            <section className="main">
               <div className="main__content">
                  {/* <h1 className="main__content-title" dangerouslySetInnerHTML={{ __html: t("home.firstScreen.title") }} /> */}
                  <h1 className="main__content-title">Новые поступления <br/> в этом сезоне</h1>
                  <div className="main__content-info">
                     <p className="main__content-info-text">Утонченные сочетания и бархатные
         оттенки - вот то, что вы искали в этом
         сезоне. Время исследовать.</p>
                     <button className="main__content-info-button button-dark" 
                     onClick={()=>novigate('/shop')}>Открыть магазин</button>
                  </div>
               </div>
               <div className="main__images">
                  <div className="main__images-left"></div>
                  <div className="main__images-center"></div>
                  <div className="main__images-right"></div>
               </div>
            </section>

            <section className="collection">
               <h2 className="title">Новая коллекция</h2>
               <div className="collection__images">
                  {
                     collection.map(el => (
                        <Card key={el.id} item={el} />
                     ))
                  }
               </div>
               <div className="collection__button">
                  <button className="collection__button-btn button"
                  onClick={()=>novigate('/shop')}>Открыть магазин</button>
               </div>
            </section>

            <section className="important">
               <h2 className="title">Что для нас важно</h2>
               <div className="important__critetions">
                  <div className="important__critetions-item">
                     <img className="important__critetions-item-icon" src={quality} alt="quality" />
                     <h3>Качество</h3>
                     <p className="important__critetions-item-text">Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества.</p>
                  </div>
                  <div className="important__critetions-item">
                     <img className="important__critetions-item-icon" src={speed} alt="speed" />
                     <h3>Скорость</h3>
                     <p className="important__critetions-item-text">Благодаря отлаженной системе в "ClothesShop" мы можем отшивать до 30-ти единиц продукции в наших собственных цехах.</p>
                  </div>
                  <div className="important__critetions-item">
                     <img className="important__critetions-item-icon" src={responsibility} alt="responsibility" />
                     <h3>Ответственность</h3>
                     <p className="important__critetions-item-text">Мы заботимся о людях и природе. Безотходное производство и комфортные условия труда - всё это "ClothesShop".</p>
                  </div>
               </div>
            </section>

            <section className="team">
               <h2 className="title">Команда мечты "ClothesShop"</h2>
               <div className="team__content">
                  <Slider />
                  <div className="team__content-info">
                     <h3 className="team__content-title">Для каждой</h3>
                     <p className="team__content-text">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                     <p className="team__content-text">ClothesShop ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                     <Link className="team__content-link" to="/brands">Подробнее о бренде</Link>
                  </div>
               </div>

            </section>
         </div>
      </div>
   )
}
export default Home;