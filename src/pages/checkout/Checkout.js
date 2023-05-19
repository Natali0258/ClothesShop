import { useContext, useState } from "react";
import { CustomContext } from "../../Context";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

const Checkout=()=>{
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm()

    const {cart}=useContext(CustomContext)
    const [checked, setChecked] = useState(false)
    const navigation = useNavigate()

    const total = cart.reduce((sum,item)=>sum +item.price*item.count,0)
    const discountTotal = total - total*20/100

    return(
        <div className="container">
            <div className="checkout">
                <h2 className="title">Оформление заказа</h2>
                <div className="checkout__link">
                    <NavLink to="/" className="checkout__link-left link">Главная</NavLink>
                    &#8226;
                    <p className="checkout__link-right current">Оформление заказа</p>
                </div>

                <form className="checkout__form" onSubmit={handleSubmit()}>
                    <div  className="checkout__form-left">
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
                    <div  className="checkout__form-right">
                        <h3>Ваш заказ</h3>
                        <table className="checkout__form-right-table">
                            <thead>
                                <tr className="checkout__form-right-table-title">
                                    <th>Товар</th>
                                    <th>Всего</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(item=>(
                                        <tr key={item.id} className="checkout__form-right-table-rows">
                                            <td>{item.title}</td>
                                            <td>{item.price * item.count}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            <tfoot className="checkout__form-right-table-foot">
                                <tr className="checkout__form-right-table-rows">
                                    <td>Подитог</td>
                                    <td>{ total}</td>
                                </tr>
                                <tr className="checkout__form-right-table-rows">
                                    <td>Итого</td>
                                    <td>{discountTotal}</td>
                                </tr>
                            </tfoot>
                        </table>

                        <h3>Способы оплаты</h3>
                        <label className="checkout__form-right-label">
                        <input type="checkbox" name="checkbox"
                            checked={checked}
                            onChange={()=>setChecked(!checked)}
                            className="checkout__form-right-checkbox" />
                        Оплата наличными</label>
                        <button className="checkout__form-right-btn button-dark" type="submit"
                        onClick={()=>navigation('/order')}>Разместить заказ</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Checkout;