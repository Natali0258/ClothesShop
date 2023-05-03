import { useContext } from 'react';
import { CustomContext } from "../../Context";
import { NavLink } from "react-router-dom";
import edit from "../../images/profile-edit.png";

const Profile = () => {
   const { user } = useContext(CustomContext)
   console.log("user=", user)
   return (
      <div className="container">
         <div className="profile">
            <h2 className="title">Мой аккаунт</h2>
            <NavLink to="/" className="profile__link-left">Главная</NavLink>
            &#8226;
            <NavLink to="/profile" className="profile__link-right">Мой аккаунт</NavLink>
            <section className="profile__content">
               <div className="profile__content-title">
                  <h3>Личные данные</h3>
                  <div className="profile__content-title-edit">
                     <img src={edit} alt="edit" width={15} height={15} />
                     <h4 className="profile__content-title-edit-text">изменить</h4>
                  </div>
               </div>
               <div className="profile__content-info">
                  <div>
                     <h4>Имя</h4>
                     <p>{user.login}</p>
                  </div>
                  <div>
                     <h4>Телефон</h4>
                     <p>{user.phone}</p>
                  </div>
                  <div>
                     <h4>Почта</h4>
                     <p>{user.email}</p>
                  </div>
                  <div>
                     <h4>Дата рождения</h4>
                     <p>{ }</p>
                  </div>
               </div>
            </section>
         </div>
      </div>
   )
}
export default Profile;