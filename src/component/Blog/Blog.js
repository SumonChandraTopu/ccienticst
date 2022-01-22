import React, { useEffect, useState } from 'react';
import Scientist from '../Scientist/Scientist';
import Cart from '../Cart/Cart'
import './Blog.css'

const Blog = () => {
    const [scientists, setScientists] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('./scientists.JSON')
        .then(res => res.json())
        .then(data => setScientists(data))
    },[])


    const handleAddToCart = scientist => {
        const newCart = [...cart, scientist];
        setCart(newCart)
        // console.log(scientist);
    }
    return (
        <div className="blog-container d-flex">
            <div className="scientist-container d-flex flex-wrap pt-5">
                {
                    scientists.map( scientist => <Scientist 
                        key={scientist.key} 
                        scientist={scientist}
                        handleAddToCart={handleAddToCart}
                        ></Scientist>)
                }
            </div>
            <div className="cart-container ">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Blog;