import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { CustomContext } from "../../Context";
import InputMask from 'react-input-mask';

const Register = () => {
   const { registerUser } = useContext(CustomContext)
   const {
      register,
      handleSubmit,
      formState: {
         errors
      },
      reset
   } = useForm()

   return (
      <section className="register">
         <form className="register__form" onSubmit={handleSubmit(registerUser)}>
            <h2>Регистрация</h2>
            <input {...register('email', { required: "Это поле обязательное" })} type="email" placeholder="Введите email" />
            <span>{errors?.email && errors?.email?.message}</span>

            <input {...register('login', { required: "Это поле обязательное" })} type="login" placeholder="Введите login" />
            <span>{errors?.login && errors?.login?.message}</span>

            <InputMask mask='+\7\(999)999-99-99' type="tel" placeholder="Введите номер телефона" 
               {...register('phone', { required: "Это поле обязательное" })} />
            <span>{errors?.phone && errors?.phone?.message}</span>

            <input {...register('password', { required: "Это поле обязательное" })} type="password" placeholder="Введите пароль" />
            <span>{errors?.password && errors?.password?.message}</span>

            <input type="password" placeholder="Подтвердите пароль" />

            <button type="submit">Регистрация</button>
            <p>
               Есть аккаунт, <Link to="/login" className="register__form-signin">Войти</Link>
            </p>
         </form>
      </section>
   )
}
export default Register;