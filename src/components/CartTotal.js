import React from 'react'
import { connect } from 'react-redux'
import { CLEAR_CART } from '../store/types'


function CartTotal({total,clearCart}) {
    return (
        <div className="sidebar_total">
            <h1>Your Total : ${total}</h1>
            <button className="btn" onClick={()=>clearCart()}>Clear Cart</button>
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return {clearCart:()=>dispatch({type:CLEAR_CART})}
}

export default connect(null,mapDispatchToProps)(CartTotal)