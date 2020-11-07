import React from 'react'
import { connect } from 'react-redux'
import { ADD_TO_CART, OPEN_SIDEBAR } from '../store/types'

function ProductItem({id,img,price,title,addToCart,openSidebar}) {
    return (
        <div className="product__item">
            <img src={img} alt={title} className="product__item-img"/>
            <div className="product__item-content">
                <h3 className="product__item-title">{title}</h3>
                <span className="product__item-price">${price}</span>
            </div>
            <button className="btn" onClick={()=>{
                addToCart(id)
                openSidebar()
            }}>Add To Cart</button>
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return {
        addToCart:(id)=>dispatch({type:ADD_TO_CART,payload:{id}}),
        openSidebar:()=>dispatch({type:OPEN_SIDEBAR})
    }
}

export default connect(null,mapDispatchToProps)(ProductItem)