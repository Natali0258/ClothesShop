import { useContext, useState } from 'react';
import { CustomContext } from "../../Context";
import { Link, NavLink } from "react-router-dom";
import edit from "../../images/profile-edit.png";
import axios from 'axios';
import InputMask from 'react-input-mask';
import {useForm} from 'react-hook-form'; 

const Profile = () => {
   const { user, setUser } = useContext(CustomContext)
   const [userChange, setUserChange] = useState(false)
   const [passwordChange, setPasswordChange] = useState(false)
   const [orderHistory, setOrderHistory] = useState(false)
   const [isColorButton, setColorButton] = useState(false)
   const {
      reset,
      register,
      handleSubmit,
      formState: {
         errors
      },
      watch
   } = useForm({
      mode: 'onBlur'
   })

   const changeUser = (data) =>{
      axios.patch(`http://localhost:3001/users/${user.id}`, data)
      .then(({data}) => {
         console.log(user)
         setUser(data)
         localStorage.setItem('user', JSON.stringify(data))
         setUserChange(false)
      })
   }

   const changePassword = (data) => {
      axios.patch(`http://localhost:3001/users/${user.id}`, {password: data.password})
      .then(() => setPasswordChange(false))
   }

   return (
      <div className="container">
         <div className="profile">
            <div className="profile__top">
               <h2 className="title">Мой аккаунт</h2>
               <div className="profile__top-buttons">
                  <button className={`profile__top-button ${isColorButton ? 'button-dark' : 'button'}`} 
                  onClick={() => {
                     setOrderHistory(true)
                     setColorButton(!isColorButton)
                     }}>История заказов</button>
                  <button className={`profile__top-button ${isColorButton ? 'button' : 'button-dark'}`}  
                  onClick={() => {
                     setOrderHistory(false)
                     setColorButton(!isColorButton)
                     }}>Настройки</button>
               </div>
            </div>
            <NavLink to="/" className="profile__link-left">Главная</NavLink>
            &#8226;
            <NavLink to="/profile" className="profile__link-right">Мой аккаунт</NavLink>
            
            {
               !orderHistory &&
               <>
                  <section className="profile__content">
                     <div className="profile__content-title">
                        <h3>Личные данные</h3>
                        <div className="profile__content-title-edit" onClick={() => setUserChange(!userChange)}>
                           {!userChange ? 
                           <>
                              <img src={edit} alt="edit" width={15} height={15} />
                              <h4 className="profile__content-title-edit-text">изменить</h4>
                           </>
                           : <h4 className="profile__content-title-edit-text">отменить</h4>
                           }
                        </div>
                     </div>
                     
                     <form onSubmit={handleSubmit(changeUser)}>
                        <div className="profile__content-info" >
                           <div>
                              <h4>Логин</h4>
                              { userChange ?
                              <input type='text' {...register('login')} className="profile__content-info-input" defaultValue={user.login}/>
                              : <p>{user.login}</p>
                              }
                           </div>
                           <div>
                              <h4>Телефон</h4>
                              { userChange ?
                              <InputMask mask='+\7\(999)999-99-99' type='tel' {...register('phone')} className="profile__content-info-input" defaultValue={user.phone}/>
                              : <p>{user.phone}</p>
                              }
                           </div>
                           <div>
                              <h4>Почта</h4>
                              { userChange ?
                              <input type='email' {...register('email')} className="profile__content-info-input" defaultValue={user.email}/>
                              : <p>{user.email}</p>
                              }
                           </div>
                        </div>
                     {userChange ? 
                        <button type='submit' className="profile__content-btn button-dark"
                        >Сохранить изменения</button>
                        : ''
                     }
                     </form>
                     
                  </section>
      
                  <section className="profile__content">
                     <div className="profile__content-title">
                        <h3>Пароль</h3>
                        <div className="profile__content-title-edit" onClick={() => setPasswordChange(!passwordChange)}>
                           {!passwordChange ? 
                           <>
                              <img src={edit} alt="edit" width={15} height={15} />
                              <h4 className="profile__content-title-edit-text">изменить</h4>
                           </>
                           : <h4 className="profile__content-title-edit-text">отменить</h4>
                           }
                        </div>
                     </div>
                        
                     <form onSubmit={handleSubmit(changePassword)}>
                        <div className="profile__content-info" >
                           <div>
                              <h4>Новый пароль</h4>
                              { passwordChange ?
                              <input type='password' 
                              {...register('password', {
                                 required: "Вы должны указать пароль",
                                 minLength: {
                                    value: 6,
                                    message: "Пароль должен содержать не менее 6 символов"
                                 }}
                                 )}
                              className="profile__content-info-input" defaultValue={user.password} />
                              : ''
                              }
                              {errors?.password && <p>{errors?.password?.message}</p>}
                           </div>
      
                           <div>
                              <h4>Подтвердите пароль</h4>
                              { passwordChange ?
                              <input type='password' 
                              {...register('confirmPwd', {
                                 required: "Это поле обязательное",
                                 validate: (val) =>{
                                    if (watch("password") !== val ){
                                       return "Пароли не совпадают"
                                    }
                                 }})} 
                              className="profile__content-info-input" defaultValue={user.password}/>
                              : ''
                              }
                              {errors?.confirmPwd && <p>{errors?.confirmPwd?.message}</p>}
                           </div>
                        </div>
                        {passwordChange ? 
                        <button type='submit' className="profile__content-btn button-dark">Сохранить изменения</button>
                        : ''
                     }
                     </form>
                  </section>
               </>
            }

            {
               orderHistory &&
               <section className="profile__content">
               <div className="profile__content-history">
                  <h3>История заказов</h3>
                  <table className="profile__content-history-table">
                     <thead>
                        <tr className="profile__content-history-table-title">
                           <th>Товар</th>
                           <th>Размер</th>
                           <th>Цвет</th>
                           <th>Цена</th>
                           <th>Количество</th>
                           <th>Всего</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           user.orders.map((item, idx) => (
                              //key не может быть id, т.к. в корзине может быть выбран несколько раз товар с одним и тем же id, но разные цвета и размеры
                              <div  className="profile__content-history-table-order">
                                 <tr className="profile__content-history-table-row">
                                    <td>Дата заказа: {item.date}</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                 </tr>
                                 <tr className="profile__content-history-table-row">
                                    <td>на сумму: {item.price}</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                 </tr>
                                 {item.clothes.map((el,idx) => (
                                    <tr key={idx} className="profile__content-history-table-row">
                                       <td>
                                          <Link to={`/product/${el.id}`}>
                                             <img src={el.image} alt={el.title} className="profile__content-history-table-row-image" />
                                          </Link>
                                          {el.title}
                                       </td>
                                       <td>{el.size}</td>
                                       <td>{el.color}</td>
                                       <td>{el.price}</td>
                                       <td>{el.count}</td>
                                       <td>{el.price * el.count}</td>
                                    </tr>
                                 ))}
                              </div>
                           ))
                        }
                     </tbody>
                  </table>
               </div>
            </section>
            }
            

         </div>
      </div>
   )
}
export default Profile;