import React from 'react' 
import {connect} from 'react-redux'
import ProductItem from './ProductItem'

function ProductContainer({products}) {
    return (
        <div className="products__container">
            <div className="container">
                <div className="products__wrapper">
                    {products.map(product=>(
                        <ProductItem {...product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=state=>{ 
    return {products:state.products}
}

export default connect(mapStateToProps)(ProductContainer)