import { useContext, useState } from "react";
import { CustomContext } from "../../Context";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Order=()=>{
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm()

    const {shop}=useContext(CustomContext)
    const [checked, setChecked] = useState(false)

    return(
        <div className="container">
            <div className="order">
                <h2 className="title">Оформление заказа</h2>
                <div className="order__link">
                    <NavLink to="/" className="order__link-left link">Главная</NavLink>
                    &#8226;
                    <p className="order__link-right current">Оформление заказа</p>
                </div>

                <form className="order__form" onSubmit={handleSubmit()}>
                    <div  className="order__form-left">
                        <h3>Данные покупателя</h3>
                        <input {...register('name', { required: "Это поле обязательное" })} type="name" placeholder="Имя" />
                        <span>{errors?.name && errors?.name?.message}</span>

                        <input {...register('email', { required: "Это поле обязательное" })} type="email" placeholder="E-mail" />
                        <span>{errors?.email && errors?.email?.message}</span>

                        <input {...register('phone', { required: "Это поле обязательное" })} type="tel" placeholder="Телефон" />
                        <span>{errors?.phone && errors?.phone?.message}</span>

                        <h3>Адрес получателя</h3>
                        <input {...register('country', { required: "Это поле обязательное" })} type="country" placeholder="Страна" />
                        <span>{errors?.country && errors?.country?.message}</span>

                        <input {...register('city', { required: "Это поле обязательное" })} type="city" placeholder="Город" />
                        <span>{errors?.city && errors?.city?.message}</span>

                        <input {...register('street', { required: "Это поле обязательное" })} type="street" placeholder="Улица" />
                        <span>{errors?.street && errors?.street?.message}</span>

                        <input {...register('house', { required: "Это поле обязательное" })} type="house" placeholder="Дом" />
                        <span>{errors?.house && errors?.house?.message}</span>

                        <input {...register('apartment', { required: "Это поле обязательное" })} type="apartment" placeholder="Квартира" />
                        <span>{errors?.apartment && errors?.apartment?.message}</span>

                        <h3>Комментарий</h3>
                        <textarea {...register('message', { required: "Это поле обязательное" })} type="message" placeholder="Комментарий" />
                        <span>{errors?.message && errors?.message?.message}</span>
                    </div>
                    <div  className="order__form-right">
                        <h3>Ваш заказ</h3>
                        <table className="order__form-right-table">
                            <thead>
                                <tr className="order__form-right-table-title">
                                    <th>Товар</th>
                                    <th>Всего</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    shop.map(item=>(
                                        <tr key={item.id} className="order__form-right-table-rows">
                                            <td>{item.title}</td>
                                            <td>{item.price }</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            <tfoot>
                                <tr className="order__form-right-table-foot">
                                    <td>Итого</td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>

                        <h3>Способы оплаты</h3>
                        <label className="order__form-right-label">
                        <input type="checkbox" name="checkbox"
                            checked={checked}
                            onChange={()=>setChecked(!checked)}
                            className="order__form-right-checkbox" />
                        Оплата наличными</label>
                        <button className="order__form-right-btn button-dark" type="submit">Разместить заказ</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Order;