import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Map from './Map';
import emailjs from '@emailjs/browser';

const Contact = () => {
   const [isMessage, setMessage] = useState(false);

   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
      .sendForm('service_8ye2ect', 'template_pe1jzzd', form.current, {
         publicKey: 'pjObHGYJm9UQ6lJe7',
      })
      .then(
         () => {
            console.log('SUCCESS!');
            setMessage(true)
         },
         (error) => {
            console.log('FAILED...', error.text);
         },
      );
   };

   return (
      <div className="contact">
         <div className="container">
            <h2 className="title">Контакты</h2>
            <div className="contact__links">
               <NavLink to="/" className="contact__links-link link">Главная</NavLink>
               &#8226;
               <p className="contact__links-link current">Контакты</p>
            </div>
            

            <section className="contact__map">
               <div className="contact__map-image">
                  <Map />
               </div>
            </section>

            <section className="contact__info">
               <div className="contact__info-item">
                  <h4>Телефон</h4>
                  <p>+7(913)382-17-67</p>
               </div>
               <div className="contact__info-item">
                  <h4>E-mail</h4>
                  <p>nataliat0258@mail.ru</p>
               </div>
               <div className="contact__info-item">
                  <h4>Адрес</h4>
                  <p>{ }</p>
               </div>
            </section>

            <section className="contact__message">
               <form className="contact__message-form" ref={form} onSubmit={sendEmail}>
                  <h3>Напишите нам</h3>
                  <label className="contact__message-form-label">Имя</label>
                  <input className="contact__message-form-input" type="text" name="name" />
                  <label className="contact__message-form-label">E-mail</label>
                  <input className="contact__message-form-input" type="email" name="email" />
                  <label className="contact__message-form-label">Телефон</label>
                  <input className="contact__message-form-input" type="tel" name="phone" />
                  <label className="contact__message-form-label">Сообщение</label>
                  <textarea name="message" />

                  <button type="submit" className="button-dark">Отправить</button>

                  {isMessage && <div className="contact__message-form-responce">Сообщение успешно отправлено</div>}
               </form>
            </section>
         </div>
      </div>
   )
}
export default Contact;