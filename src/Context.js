import { createContext, useEffect, useState, useSyncExternalStore } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const CustomContext = createContext()

export const Context = (props) => {

   const [user, setUser] = useState({
      login: ""
   })
   const [shop, setShop] = useState([])
   const [status, setStatus] = useState('all')
   const [page, setPage] = useState(1)
   const [cart, setCart] = useState([])

   const addCart = (product) => {
      const idx = cart.findIndex(item => item.id === product.id && item.size === product.size && item.color === product.color)
      if (idx >= 0) {  //если в карзине уже есть такой же товар
      //    cart[idx].count = +cart[idx].count + +product.count //не верно, потому что сложение происходит только после рендера
         setCart(cart.map(item=>{
            if(item.id === product.id && item.size === product.size && item.color === product.color){
               return {...item, count: + item.count + +product.count}
            }else{
               return item
            }
         }))

      } else {
         setCart([...cart, product])
      }
   }

   //обновить корзину
   const updateCart=(id, color, size, count)=>{
      setCart(cart.map(item=>{
         if(item.id === id && item.size === size && item.color === color){
            return {...item, count:count}
         }else{
            return item
         }
      }))
   }

   const deleteCart = (id, color, size)=>{
      setCart(cart.filter(item=>{
         return (item.id !== id && item.color !== color && item.size !== size)
      }))
   }

   const navigate = useNavigate()

   //при обнавлении страницы данные о user'е и cart берутся из localStorage
   useEffect(() => {
      if (localStorage.getItem('user') !== null) {
         setUser(JSON.parse(localStorage.getItem('user')))
      }

      if(localStorage.getItem('cart') !== null){
         setCart(JSON.parse(localStorage.getItem('cart')))
      }

      //GET-запрос:
      axios("http://localhost:3001/clothes")
         .then(({ data }) => setShop(data))
   }, [])

   useEffect(()=>{
      localStorage.setItem('cart', JSON.stringify(cart))
   }, [cart])

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
      localStorage.removeItem('cart')
      setUser({
         login: ''
      })
   }
   const value = {
      user, setUser,
      registerUser,
      loginUser,
      logOutUser,
      shop, setShop,
      status, setStatus,
      page, setPage,
      cart, setCart, 
      addCart, deleteCart, updateCart
   }

   return <CustomContext.Provider value={value}>
      {props.children}
   </CustomContext.Provider>
}