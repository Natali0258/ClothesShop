import { Link, useNavigate } from "react-router-dom"

const Card = (props) => {
   const { id, image, title, price, priceSale , inStock} = props.item

   return (
      <div className="card">
         <Link className="card__image" to={`/product/${id}`}>
            <img className="card__image-photo" src={image[0]} alt="" />
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