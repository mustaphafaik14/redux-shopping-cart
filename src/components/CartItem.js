import React from 'react'
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io'
import { connect } from 'react-redux' 
import { DECREASE, REMOVE_CART_ITEM , INCREASE} from '../store/types'
 

function CartItem({id,title,img,price,amount,removeCartItem,increaseAmount,decreaseAmount}) {
    return (
            <div className="sidebar_item">
                <div className="sidebar_item-content">
                    <img src={img} alt=""/>
                    <div className="sidebar_item-info">
                        <h3>{title}</h3>
                        <span>${price}</span>
                        <button onClick={()=>removeCartItem(id)}>remove</button>
                    </div>
                </div>
                
                <div className="sidebar_item-amount">
                    <button onClick={()=>increaseAmount(id)}><IoIosArrowUp /></button>
                    <span>{amount}</span>
                    <button onClick={()=>decreaseAmount(id)}><IoIosArrowDown /></button>
                </div>
            </div> 
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        removeCartItem:(id)=>dispatch({type:REMOVE_CART_ITEM,payload:{id}}),
        increaseAmount:(id)=>dispatch({type:INCREASE,payload:{id}}),
        decreaseAmount:(id)=>dispatch({type:DECREASE,payload:{id}}),
    }
}

export default connect(null,mapDispatchToProps)(CartItem)