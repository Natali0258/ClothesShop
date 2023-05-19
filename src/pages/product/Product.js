import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CustomContext } from "../../Context";
import { NavLink, useParams } from "react-router-dom";
import Card from '../card/Card';

const Product = () => {
    const params = useParams()
    console.log('params=', params)
    const { status, setStatus, shop, addCart } = useContext(CustomContext)
    const [count, setCount]=useState('1')
    const [product, setProduct] = useState({})
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        axios(`http://localhost:3001/clothes/${params.id}`)
            .then(({ data }) => {
                setProduct(data)
                setColor(data.colors[0])
                setSize(data.size[0])
                setImage(data.image[0])
            })
    }, [params]) //без [params] при выборе товара из "связанные товары" не произходит перерисовки

    const colorClick = (item, index) => {
        setColor(item);
        console.log('product.image.length=', product.image.length)
        if (product.image.length > 1) {
            console.log('index=', index)
            setImage(product.image[index])
        }
    }

    return (
        <section className="product">
            <div className="container">
                {/* //Если есть товар, то показываем его карточку, если product:{}, то выводим "товаров нет" */}
                {product.title && <>
                    <h2 className="title">{product.title}</h2>
                    <div className="product__link">
                        <NavLink to="/" className="product__link-left link">Главная</NavLink>
                        &#8226;
                        <NavLink to="/shop" className="product__link-right link"
                            onClick={() => { setStatus(product.category) }}>{product.category}</NavLink>
                        &#8226;
                        <p className="product__link-title current">{product.title}</p>
                    </div>

                    <div className="product__content">
                        <img className="product__content-image" src={image} alt={product.title} />
                        <div className="product__content-info">
                            <div className="product__content-info-price">
                                {
                                    product.priceSale &&
                                    <>
                                        <p>{product.priceSale} руб. /</p>
                                        <p className="product__content-info-price-item">{product.price} руб.</p>
                                    </>
                                }
                                {
                                    !product.priceSale &&
                                    <p>{product.price} руб.</p>
                                }
                            </div>
                            <h3>Выберите размер:</h3>
                            <ul className="product__content-info-size">
                                {product.size.map(item =>
                                    <li onClick={() => { setSize(item); console.log("size=", item) }} className={`product__content-info-size-item ${item === size ? "product__content-info-size-item_active" : ""}`}>{item}</li>
                                )}
                            </ul>
                            <h3>Выберите цвет:</h3>
                            <ul className="product__content-info-colors">
                                {product.colors.map((item, index) =>
                                    <li style={{ background: item }}
                                        onClick={() => {
                                            setColor(item);
                                            console.log("color=", item)
                                            if (product.image.length > 1) {
                                                console.log('index=', index)
                                                setImage(product.image[index])
                                            }
                                        }}
                                        className={`product__content-info-colors-item ${item === color ? 'product__content-info-colors-item_active' : ''}`}
                                    />
                                )}
                            </ul>
                            {product.inStock ?
                                <h3>В наличии: <span>{product.inStock}</span></h3>
                                : <h3>нет в наличии</h3>
                            }
                            <div className="product__content-info-form">
                                <input type="number" disabled={!product.inStock} min="1" max={product.inStock} value={count}
                                    className="product__content-info-form-input"
                                    onChange={(e)=>{
                                        if(e.target.value <= product.inStock){
                                            setCount(e.target.value)
                                        }
                                        }} />
                                <button type='button' disabled={!product.inStock} 
                                    className="product__content-info-form-btn"
                                    onClick={()=>addCart({
                                        id: product.id,
                                        title: product.title,
                                        image: product.image,
                                        color,
                                        size,
                                        count, 
                                        price: product.priceSale || product.price,
                                        category: product.category,
                                        inStock: product.inStock
                                    })}>Добавить в корзину</button>
                            </div>
                        </div>
                    </div>

                    <p className="product__variant">Связанные товары</p>
                    <div className="product__row">
                        {shop.filter(item => item.category === product.category && item.id !== product.id)
                            .slice(0, 3) //показывает первые 3 товара, сделать карусель
                            .map((item) => (
                                <Card item={item} />
                            ))}
                    </div>
                </>}
                {
                    !product.title && <p>Нет товара в наличии</p>
                }
            </div>
        </section>
    )
}
export default Product;