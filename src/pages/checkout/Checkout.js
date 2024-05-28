import { useContext, useState } from "react";
import { CustomContext } from "../../Context";
import { useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout=()=>{
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm()

    const {cart, ticket, user, setCart, setTicket, setUser, shop, setShop}=useContext(CustomContext)
    const [checked, setChecked] = useState(false)
    const navigation = useNavigate()

    const total = cart.reduce((sum,item)=>sum +item.price*item.count,0)

    const addOrder = async (data) => {
        //уменьшить количество товара в базе (а значит и в карточке) на количество заказанного товара
        // cart.map(item => {...} - выходит ошибка "Выражения "await" допускаются только в асинхронных функциях и на верхних уровнях модулей."
        for (const item of cart) {
            await axios.patch(`http://localhost:3001/clothes/${item.id}`, {
                inStock: item.inStock - item.count
                }).then(() => {
                    console.log('Успешно изменено количество товара в наличии')
                    }) 
        }

        // в Context'е обновить стейт со всеми товарами 
        await axios("http://localhost:3001/clothes")
        .then(( {data} ) => {
            console.log('clothes=', data)
            setShop(data)
        })

        //сохранить заказ в базе данных
        await axios.post("http://localhost:3001/orders", {
            ...data, 
            clothes: cart,
            price: Array.isArray(ticket) && ticket.length ? total - total*ticket[0].sum/100 : total,
            date: new Date()
        }).then(() => console.log("Успешно добавлен"))

        //сохранить заказ в профиле пользователя
        await axios.patch(`http://localhost:3001/users/${user.id}`, {
            orders: [
                ...user.orders, 
                {
                    ...data,
                    clothes: cart,
                    price: Array.isArray(ticket) && ticket.length ? total - total*ticket[0].sum/100 : total,
                    date: new Date()
                }
            ]
        }).then(() => console.log("Успешно добавлен"))

        //обновить профиль пользователя на сайте (т.е. в Context'е стейт user)
        await axios(`http://localhost:3001/users/${user.id}`)
        .then(({data}) => {
            setUser(data)
        })

        //уменьшаем лимит купона на 1 или, если лимит равен 1, то удаляем купон
        await Array.isArray(ticket) && ticket.length && ticket[0].count > 1 ?
            axios.patch(`http://localhost:3001/tickets/${ticket[0].id}`, {
                count: ticket[0].count - 1
            }).then(() => console.log('Успешно изменено лимит промокода'))
            : ticket[0].count === 1 ? 
            axios.delete(`http://localhost:3001/tickets/${ticket[0].id}`).then(() => console.log('Промокод успешно удален'))
            : console.log('Error')

        await reset()
        await setCart([])
        await setTicket([])
        await navigation("/order")
    }

    return(
        <div className="container">
            <div className="checkout">
                <h2 className="title">Оформление заказа</h2>
                <div className="checkout__link">
                    <NavLink to="/" className="checkout__link-left link">Главная</NavLink>
                    &#8226;
                    <p className="checkout__link-right current">Оформление заказа</p>
                </div>

                <form className="checkout__form" onSubmit={handleSubmit(addOrder)}>
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
                        <textarea {...register('message')} type="message" placeholder="Комментарий" />
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
                            <tbody className="checkout__form-right-table-rows">
                                {
                                    cart.map((item, idx) => (
                                        <tr key={idx}>
                                            <tr>
                                                <td rowSpan={5}>
                                                    <Link to={`/product/${item.id}`}>
                                                        <img src={item.image} alt={item.title} className="checkout__form-right-table-row-image" />
                                                    </Link>
                                                </td>
                                                <td>Наименование: {item.title}</td>
                                            </tr>   
                                            <tr>
                                                <td>Количество: {item.count}</td>
                                            </tr>
                                            <tr>
                                                <td>Цвет: {item.color}</td>
                                            </tr>
                                            <tr>
                                                <td>Размер: {item.size}</td>
                                            </tr>
                                            <tr>
                                                <td>Цена: {item.price * item.count} руб.</td>
                                            </tr>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            <tfoot className="checkout__form-right-table-foot">
                                <tr className="checkout__form-right-table-row">
                                    <td>Подитог</td>
                                    <td>{ total} руб.</td>
                                </tr>
                                <tr className="checkout__form-right-table-row">
                                    <td>Итого</td>
                                    <td>{Array.isArray(ticket) && ticket.length ? total - total*ticket[0].sum/100 : total} руб.</td>
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
                        // onClick={()=>navigation('/order')}
                        >Разместить заказ</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Checkout;