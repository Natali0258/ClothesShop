import { useNavigate } from "react-router-dom"

const Card = (props) => {
   const { image, title, price, priceSale } = props.item
   const navigate = useNavigate()
   const handleClick = () => {
      navigate('/brands')
   }
   return (
      <div className="card">
         <div className="card__image">
            <img className="card__image-photo" src={image} alt="" />
            <div className="card__image-overlay">
               <div className="card__image-overlay-triangle" onClick={handleClick}></div>
            </div>
         </div>
         <p className="card__name">{title}</p>
         <p className="card__price">{priceSale
            ? <>
               <span style={{ textDecoration: 'line-through' }}>{price} руб. </span>/
               <span> {priceSale} руб.</span>
            </>
            : <span>{price} руб.</span>}</p>
      </div >
   )
}
export default Card;