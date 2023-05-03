import React from 'react'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Contact = () => {
   const {
      register,
      handleSubmit,
      formState: {
         errors
      },
      reset
   } = useForm()

   return (
      <div className="container">
         <div className="contact">
            <h2 className="title">Контакты</h2>
            <NavLink to="/" className="contact__link-left">Главная</NavLink>
            &#8226;
            <NavLink to="/contact" className="contact__link-right">Контакты</NavLink>

            <section className="contact__map">
               <div className="contact__map-image">Карта с любой точкой</div>
            </section>

            <section className="contact__info">
               <div className="contact__info-item">
                  <h4>Телефон</h4>
                  <p>{ }</p>
               </div>
               <div className="contact__info-item">
                  <h4>E-mail</h4>
                  <p>{ }</p>
               </div>
               <div className="contact__info-item">
                  <h4>Адрес</h4>
                  <p>{ }</p>
               </div>
            </section>

            <section className="contact__message">
               <form className="contact__message-form" onSubmit={handleSubmit()}>
                  <h3>Напишите нам</h3>
                  <input {...register('name', { required: "Это поле обязательное" })} type="name" placeholder="Имя" />
                  <span>{errors?.name && errors?.name?.message}</span>

                  <input {...register('email', { required: "Это поле обязательное" })} type="email" placeholder="E-mail" />
                  <span>{errors?.email && errors?.email?.message}</span>

                  <input {...register('phone', { required: "Это поле обязательное" })} type="tel" placeholder="Телефон" />
                  <span>{errors?.phone && errors?.phone?.message}</span>

                  <textarea {...register('message', { required: "Это поле обязательное" })} type="text" placeholder="Сообщение" />
                  <span>{errors?.message && errors?.message?.message}</span>

                  <button type="submit">Отправить</button>

                  <div className="contact__message-form-responce">Сообщение успешно отправлено</div>
               </form>
            </section>
         </div>
      </div>
   )
}
export default Contact;