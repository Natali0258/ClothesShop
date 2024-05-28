import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CustomContext } from "../../Context";
import { NavLink, useParams } from "react-router-dom";
import Card from '../card/Card';

const Product = () => {
    const params = useParams()
    const { status, setStatus, shop, addCart, getAllClothes } = useContext(CustomContext)
    const [sale, setSale] = useState(false)
    const [saleCount, setSaleCount] = useState(0)
    const [count, setCount]=useState('1')
    const [product, setProduct] = useState({})
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    // const [image, setImage] = useState('')

    useEffect(() => {
        axios(`http://localhost:3001/clothes/${params.id}`)
            .then(({ data }) => {
                setProduct(data)
                setColor(data.colors[0])
                setSize(data.sizes[0])
                // setImage(data.image[0])
            })
    }, [params]) //без [params] при выборе товара из "связанные товары" не произходит перерисовки

    return (
        <section className="product">
            <div className="container">
                {/* //Если есть товар, то показываем его карточку, если product:{}, то выводим "товаров нет" */}
                {product.title && <>
                    <h2 className="title">{product.title}</h2>
                    <div className="product__links">
                        <NavLink to="/" className="product__links-link link">Главная</NavLink>
                        &#8226;
                        <NavLink to="/shop" className="product__links-link link"
                            onClick={() => { setStatus(product.category) }}>{product.category}</NavLink>
                        &#8226;
                        <p className="product__links-link current">{product.title}</p>
                    </div>

                    <div className="product__content">
                        <img className="product__content-image"  
                        // src={product.pictures.src}
                        src={product.image}
                        alt={product.title} />
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
                                    <div className="product__content-info-price-add ">
                                        <div className="product__content-info-price-add-sale">
                                            {
                                                sale ? <input className="product__content-info-price-add-sale-input" 
                                                        type="number" value={saleCount} 
                                                        onChange={(e) => setSaleCount(e.target.value) } /> 
                                                : ''
                                            }
                                            <button className="product__content-info-price-add-btn button" 
                                                onClick={() => {
                                                    if(saleCount>0){
                                                        axios.patch(`http://localhost:3001/clothes/${product.id}`, {priceSale: product.price - product.price * saleCount / 100})
                                                        .then(()=>{
                                                            getAllClothes()
                                                            setSaleCount(0)
                                                        })
                                                    }
                                                    setSale(!sale)
                                                }}>Добавить {sale ? '' : 'скидку'}</button>
                                        </div>
                                        <p>{product.price} руб.</p>
                                    </div>
                                }
                            </div>
                            <h3>Выберите размер:</h3>
                            <ul className="product__content-info-size">
                                {product.sizes.map((item) =>
                                    <li key={item} onClick={() => { setSize(item); console.log("size=", item) }} className={`product__content-info-size-item ${item === size ? "product__content-info-size-item_active" : ""}`}>{item}</li>
                                )}
                            </ul>
                            <h3>Выберите цвет:</h3>
                            <ul className="product__content-info-colors">
                                {product.colors.map((item) =>
                                    <li key={item} style={{ background: item }}
                                        onClick={() => setColor(item)}
                                        className={`product__content-info-colors-item ${item === color ? 'product__content-info-colors-item_active' : ''}`}
                                    />
                                )}
                            </ul>
                            {product.inStock ?
                                <h3>В наличии: <span>{product.inStock}</span></h3>
                                : <h3>нет в наличии</h3>
                            }
                            <div className="product__content-info-form">
                                {/* если товара нет в наличии, то input и button заблокированы */}
                                <input type="number" disabled={!product.inStock} min="1" max={product.inStock} value={count}
                                    className="product__content-info-form-input"
                                    onChange={(e)=>{
                                        if(e.target.value <= product.inStock){
                                            setCount(e.target.value)
                                        }
                                        }} />
                                <button type='button' disabled={!product.inStock} 
                                    className="product__content-info-form-btn "
                                    onClick={()=>addCart({
                                        id: product.id,
                                        title: product.title,
                                        image: product.image,
                                        // image: [image],
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
                                <Card key={item.id} item={item} />
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