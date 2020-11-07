 import { ADD_TO_CART, CLEAR_CART, CLOSE_SIDEBAR, DECREASE, GET_TOTALS, INCREASE, OPEN_SIDEBAR, REMOVE_CART_ITEM } from "./types"

function reducer(state,action){
    //UI
    if(action.type === OPEN_SIDEBAR){
        return {...state,sidebarIsOpen:true}
    }
    if(action.type === CLOSE_SIDEBAR){
        return {...state,sidebarIsOpen:false}
    }
    //Add to Cart
    if(action.type===ADD_TO_CART){
        const {products,cart}=state
 
        let product=products.find(el=>el.id===action.payload.id)
        let tempCart=[...cart]
        let tempItem=tempCart.find(el=>el.id === product.id)
        
        if(!tempItem){
            let cartItem={...product,amount:1}
            tempCart=[...tempCart,cartItem]
        }else{ 
            tempItem=tempItem.amount++
        }
        
        return {...state,cart:tempCart}
    }
    //Remov Cart Item
    if(action.type===REMOVE_CART_ITEM){
        console.log(action.payload.id)
        let tempCart=state.cart.filter(el=>el.id !== action.payload.id)
        return {...state,cart:tempCart}
    }
    //Get TOTALS
    if(action.type === GET_TOTALS){
        let {total,amount}=state.cart.reduce((acc,cartItem)=>{
            acc.total+=cartItem.price * cartItem.amount 
            acc.amount+=cartItem.amount
            return acc
        },{
            total:0,
            amount:0
        })
        total=parseFloat(total.toFixed(2))
        return{...state,amount,total}
    }
    //CLEAR CART
    if(action.type===CLEAR_CART){
        return {...state,cart:[],amount:0,total:0}
    }

    //Increase Amount
    if(action.type===INCREASE){
        let tempCart=[...state.cart]
        tempCart=tempCart.map(el=>{
            if(el.id===action.payload.id){
                el.amount++
            }
            return el
        })
        return {...state,cart:tempCart}
    }
    //Decrease Amount
    if(action.type===DECREASE){
        let cartItem=state.cart.find(el=>el.id === action.payload.id) 
        cartItem.amount--
        if(cartItem.amount === 0){
            return {...state,cart:state.cart.filter(el=>el.id !== action.payload.id)}
        }
        return {...state,cart:state.cart.map(el=>{
            if(el.id === cartItem.id){
                el=cartItem
            }
            return cartItem
        })}
    }
    return state
}

export default reducer
