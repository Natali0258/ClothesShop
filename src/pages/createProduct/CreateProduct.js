import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import CreateColors from "./cteateColors/createColors";
import CreateSizes from "./createSizes/createSizes";
import axios from "axios";
import { CustomContext } from "../../Context";

const CreateProduct = () => {
    const [colors, setColors] = useState([])
    const [sizes, setSizes] = useState([])

    const novigate = useNavigate()

    const {getAllClothes} = useContext(CustomContext)

    const {register,reset, handleSubmit} = useForm()

    const createProduct = (data) => {
        axios.post("http://localhost:3001/clothes", {
            ...data,
            colors,
            sizes,
            // выбираемые картинки должны лежать в public/shop
            image: '../shop/' + data.image[0].name
            // pictures: {
            //     "rawFile": {
            //         "path": data.image[0].name
            //     },
            //     "src": '../shop/' + data.image[0].name,
            //     "title": data.image[0].name
            // }
        })
            .then(() => {
                getAllClothes()
                novigate('/shop')
            })
    }
    return(
        <div className="create">
            <div className="container">
                <h2 className="create__title title">Создать продукт</h2>
                <div className="create__links">
                    <NavLink to="/" className="create__links-link link">Главная</NavLink>
                    &#8226;
                    <NavLink to="/shop" className="create__links-link link">Магазин</NavLink>
                    &#8226;
                    <p className="create__links-link current">Создание товара</p>
                </div>

                <form className="create__form" onSubmit={handleSubmit(createProduct)}>
                    <div className="create__form-block">
                        <label htmlFor="title" className="create__form-label">Название</label>
                        <input {...register('title')} type="text" id="title" className="create__form-input" />
                    </div>

                    <div className="create__form-block">
                        <label htmlFor="price" className="create__form-label">Цена</label>
                        <input {...register('price')} type="number" id="price" className="create__form-input" />
                    </div>

                    <div className="create__form-block">
                        <label htmlFor="inStock" className="create__form-label">Количество</label>
                        <input {...register('inStock')} type="number" id="inStock" className="create__form-input" />
                    </div>

                    {/* <div className="create__form-block">
                        <label htmlFor="image" className="create__form-label">Фотография</label>
                        <input {...register('pictures')} type="file" id="image" className="create__form-input" />
                    </div> */}

                    <div className="create__form-block">
                        <label htmlFor="image" className="create__form-label">Фотография</label>
                        <input {...register('image')} type="file" id="image" className="create__form-input" />
                    </div>

                    <div className="create__form-block">
                        <h3 className="create__form-label">Цвета</h3>
                        <ul className="create__form-colors">
                            <CreateColors colors={colors} setColors={setColors} color={"black"} />
                            <CreateColors colors={colors} setColors={setColors} color={"white"} />
                            <CreateColors colors={colors} setColors={setColors} color={"orange"} />
                            <CreateColors colors={colors} setColors={setColors} color={"red"} />
                            <CreateColors colors={colors} setColors={setColors} color={"blue"} />
                            <CreateColors colors={colors} setColors={setColors} color={"grey"} />
                            <CreateColors colors={colors} setColors={setColors} color={"green"} />
                        </ul>
                    </div>

                    <div className="create__form-block">
                        <h3 className="create__form-label">Размеры</h3>
                        <ul className="create__form-sizes">
                            <CreateSizes sizes={sizes} setSizes={setSizes} size="XS" />
                            <CreateSizes sizes={sizes} setSizes={setSizes} size="S" />
                            <CreateSizes sizes={sizes} setSizes={setSizes} size="M" />
                            <CreateSizes sizes={sizes} setSizes={setSizes} size="L" />
                            <CreateSizes sizes={sizes} setSizes={setSizes} size="XL" />
                            <CreateSizes sizes={sizes} setSizes={setSizes} size="XXL" />
                        </ul>
                    </div>

                    <div className="create__form-block">
                        <label htmlFor="category" className="create__form-label">Категории</label>
                        <select {...register('category')} id="category" className="create__form-select">
                            <option>coat</option>
                            <option>costumes</option>
                            <option>jeans</option>
                            <option>skirts</option>
                            <option>shirts</option>
                        </select>
                    </div>

                    <button type="submit" className="create__form-btn button-dark">Создать</button>
                </form>
            </div>
        </div>
    )
}
export default CreateProduct;