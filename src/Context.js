import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const CustomContext = createContext()

export const Context = (props) => {
   const [count, setCount] = useState('1');
   const [user, setUser] = useState({
      login: ""
   })
   const navigate = useNavigate()

   //при обнавлении страницы данные о user'е берутся из localStorage
   useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('user')))
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
      count, setCount,
      user, setUser,
      registerUser,
      loginUser,
      logOutUser
   }

   return <CustomContext.Provider value={value}>
      {props.children}
   </CustomContext.Provider>
}