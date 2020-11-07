import React, { useEffect } from 'react'
import {FaTimes} from 'react-icons/fa'
import {connect} from 'react-redux' 
import { CLOSE_SIDEBAR ,GET_TOTALS } from '../store/types'
import CartItem from './CartItem'
import CartTotal from './CartTotal'
 

function Sidebar({sidebarIsOpen,closeSidebar,cart,getTotals,total}) {

    useEffect(()=>{ 
        getTotals()
        localStorage.setItem('cartItemsRedux',JSON.stringify(cart))
    },[cart])

    if(cart.length === 0){
        return (
            <div className={`sidebar ${sidebarIsOpen && "sidebar-show"}`}>
            <button onClick={()=>closeSidebar()}><FaTimes /></button>
            
            <div className="sidebar__wrapper"> 
                 <h1>Your Cart Is Empty</h1>
            </div>  
        </div>
        )

    }
    
    return (
        <div className={`sidebar ${sidebarIsOpen && "sidebar-show"}`}>
            <button onClick={()=>closeSidebar()}><FaTimes /></button>
            
            <div className="sidebar__wrapper"> 
                {cart.map(cartItem=>{
                    return (<CartItem key={cartItem.id} {...cartItem} />)
                })}
                
                <CartTotal total={total} />
            </div>  
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        sidebarIsOpen:state.sidebarIsOpen,
        cart:state.cart,
        total:state.total
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        closeSidebar:()=>dispatch({type:CLOSE_SIDEBAR}),
        getTotals:()=>dispatch({type:GET_TOTALS})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)