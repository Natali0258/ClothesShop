import { Link, useNavigate } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = (props) => {
   const { id, image, pictures, title, price, priceSale , inStock} = props.item

   return (
      <div className="card">
         <Link className="card__image" to={`/product/${id}`}>
            {/* картинки загружаются только при прокрутки до их местоположения */}
            <LazyLoadImage className="card__image-photo" 
               alt={title}
               effect="blur"
               //src={pictures.src}
               src={image}  />
            {/* <img className="card__image-photo" src={image[0]} alt="" /> */}
         </Link>
         <p className="card__name">{title}</p>
         <p className="card__price">{priceSale
            ? <>
               <span style={{ textDecoration: 'line-through' }}>{price} руб. </span>/
               <span> {priceSale} руб.</span>
            </>
            : <span>{price} руб.</span>}
         </p>
            {inStock ?
            <p>В наличии: <span>{inStock}</span></p>
            : <p>нет в наличии</p>
            }
      </div >
   )
}
export default Card;