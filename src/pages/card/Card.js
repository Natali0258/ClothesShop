const Card = (props) => {
   const { image, title, price } = props.item
   return (
      <div className="card">
         <img className="card__image" src={image} alt="" />
         <p className="card__name">{title}</p>
         <p className="card__price">{price} руб.</p>
      </div>
   )
}
export default Card;