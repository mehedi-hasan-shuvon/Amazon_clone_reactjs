import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    return (
        <div>
            <h2>This is orders:{products.length}</h2>
            <h3>cart has : {cart.length}</h3>
        </div>
    );
};

export default Orders;