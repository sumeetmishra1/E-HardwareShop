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
    const username = localStorage.getItem('username')

    function addToCart(item){
        const existingCartItemIndex = items.findIndex(val=> val.id === item.id)
        fetch(`https://crudcrud.com/api/9f471fde5fa14a7a8d7466d4414f80d1/${username}`,{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'Content-Type' :'application/json',
            }
        })
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

    async function openCloseCart(value){
        changeCartState(value)
        var item = await fetch(`https://crudcrud.com/api/9f471fde5fa14a7a8d7466d4414f80d1/${username}`)
        item = await item.json()
        changeItem([...item])
    }

    return(
        <CartContext.Provider value={{items:items,addToCart:addToCart,removeItem:removeItem,openCloseCart:openCloseCart,isCartOpen:isCartOpen}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContext