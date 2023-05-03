import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const CustomContext = createContext()

export const Context = (props) => {

   const [user, setUser] = useState({
      login: ""
   })
   const [shop, setShop] = useState([])

   const navigate = useNavigate()

   //при обнавлении страницы данные о user'е берутся из localStorage
   useEffect(() => {
      if (localStorage.getItem('user' !== "null")) {
         setUser(JSON.parse(localStorage.getItem('user')))
      }
      //GET-запрос:
      axios("http://localhost:3001/clothes")
         .then(({ data }) => setShop(data))
   }, [])

   const registerUser = (data) => {
      axios.post("http://localhost:3001/register", { ...data, orders: [] })
         .then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data.user)) //чтобы при обнавлении страницы не пропали данные о usere
            setUser(res.data.user)
            navigate('/')
         })
   }

   const loginUser = (data) => {
      axios.post("http://localhost:3001/login", data)
         .then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data.user)) //чтобы при обнавлении страницы не пропали данные о usere
            setUser(res.data.user)
            navigate('/')
         })
   }

   const logOutUser = () => {
      localStorage.removeItem('user')
      setUser({
         login: ''
      })
   }
   const value = {
      user, setUser,
      registerUser,
      loginUser,
      logOutUser,
      shop, setShop
   }

   return <CustomContext.Provider value={value}>
      {props.children}
   </CustomContext.Provider>
}