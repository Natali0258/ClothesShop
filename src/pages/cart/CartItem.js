import React, { useContext, useState } from 'react'
import { CustomContext } from '../../Context';
import { Link} from 'react-router-dom';
import { ImCross } from "react-icons/im";

const CartItem=({item})=>{
    
    const { deleteCart, updateCart} = useContext(CustomContext)
    const [countItem, setCountItem]=useState(item.count)

    return(
        <tr className="cart__table-rows">
            <td>
                <p className="cart__table-rows-del" onClick={()=>{
                    //console.log("item=",item)
                    deleteCart(item.id, item.color, item.size)}}><ImCross /></p>
                <Link to={`/product/${item.id}`}>
                    <img src={item.image[0]} alt={item.title} className="cart__table-rows-image" />
                </Link>
                {item.title}
            </td>
            <td>{item.size}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>
            <td>
                <input className="cart__table-rows-count" type="number" min="1" value={countItem} 
                    onChange={(e)=>{
                        if(e.target.value <= item.inStock){
                        setCountItem(e.target.value)
                        updateCart(item.id, item.color, item.size, e.target.value)
                    }}} />
            </td>
            <td>{item.price * item.count}</td>
        </tr>
    )
}
export default CartItem;