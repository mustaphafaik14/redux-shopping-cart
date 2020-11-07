import React from 'react'
import {FaCartPlus} from 'react-icons/fa'

import {connect} from 'react-redux'
import { OPEN_SIDEBAR } from '../store/types'

function Navbar({openSidebar,amount}) {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navabr__wrapper">
                    <a href="/" className="logo">
                        <h1>MFShop</h1>
                    </a>
                    <div className="shopping__cart" onClick={()=>openSidebar()}>
                        <FaCartPlus />
                        <span className="shopping__cart-amount">{amount}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStatToProps=state=>{
    return {amount:state.amount}
}

const mapDispatchToProps=dispatch=>{
    return {
        openSidebar:()=>dispatch({type:OPEN_SIDEBAR}),
    }
}

export default connect(mapStatToProps,mapDispatchToProps)(Navbar)