import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { CustomContext } from "../../Context";

const Login = () => {
   const { loginUser } = useContext(CustomContext)

   const {
      register,
      handleSubmit,
      formState: {
         errors
      },
      reset
   } = useForm()

   return (
      <section className="login">
         <form className="login__form" onSubmit={handleSubmit(loginUser)} >
            <h2>Вход в аккаунт:</h2>
            <input {...register('email', { required: "Это поле обязательное" })} type="email" placeholder="Введите email" />
            <span>{errors?.email && errors?.email?.message}</span>
            <input {...register('password', { required: "Это поле обязательное" })} type="password" placeholder="Введите пароль" />
            <span>{errors?.password && errors?.password?.message}</span>
            <button type="submit">Войти</button>
            <p>
               Нет аккаунта, <Link to="/register" className="login__form-signin">Регистрация</Link>
            </p>
         </form>
      </section>
   )
}
export default Login;