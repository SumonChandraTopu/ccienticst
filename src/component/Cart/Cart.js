import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart);
    const {cart} = props
    
    let total = 0;
    let person;
    for( const scientist of cart){
        total = parseInt(total + parseInt(scientist.salary))
        person = scientist.name
    }
    return (
        <div className="cart">
            <h4>Total cost of scientist</h4>
            <h6>Name: {person}</h6>
            <h5>Grand total: {total}</h5>
        </div>
    );
};

export default Cart;