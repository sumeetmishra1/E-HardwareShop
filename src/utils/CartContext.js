import { useState } from "react"
import React from "react";
const CartContext = React.createContext({
    items:[],
    addToCart:(item)=>{},
    removeItem:()=>{},
    openCloseCart:()=>{},
    isCartOpen:false
})
export function CartProvider(props){
    const[isCartOpen,changeCartState]=useState(false)
    const [items,changeItem]= useState([]);

    function addToCart(item){
        const existingCartItemIndex = items.findIndex(val=> val.id === item.id)
        if(existingCartItemIndex!==-1){
            items[existingCartItemIndex].quantity+=item.quantity
            changeItem((olditem)=>{
                return[...olditem]
            })
        }
        else{
            item.quantity=1;
            changeItem((olditem)=>{
                return [...olditem,item]
            })
        }
        

    }

    function removeItem(Id){
        const newItem=items.filter((item)=>item.id !== Id)
        changeItem([...newItem])
    }

    function openCloseCart(value){
        changeCartState(value)
    }

    return(
        <CartContext.Provider value={{items:items,addToCart:addToCart,removeItem:removeItem,openCloseCart:openCloseCart,isCartOpen:isCartOpen}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContext