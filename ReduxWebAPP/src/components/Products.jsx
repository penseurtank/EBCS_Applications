/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';


const Products = () => {
    // const [products, setProducts] = useState([]);
    const { data: products, status } = useSelector((state) => state.product)
    // console.log('======= dttt', products);
    const dispatch = useDispatch();


    // useEffect(() => {
    //     const controller = new AbortController();

    //     const fetchProducts = async () => {
    //         try {
    //             const res = await fetch('https://fakestoreapi.com/products', {
    //                 signal: controller.signal,
    //             });
    //             const data = await res.json();
    //             console.log(data);
    //             setProducts(data);
    //         } catch (error) {
    //             if (error.name !== 'AbortError') {
    //                 console.error('Fetch error:', error);
    //             }
    //         }
    //     };

    //     fetchProducts();

    //     return () => {
    //         controller.abort();
    //     };
    // }, []);

    // using thunk
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const handleClick = (product) => {
        dispatch(add(product));
    };

    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <div className="imgWrapper">
                        <img src={product.image} alt="product_img" />
                    </div>
                    <h4 className="title">{product.title}</h4>
                    <h5 className="price">${product.price}</h5>
                    <div className="spacer" />
                    <button className="btn" onClick={() => handleClick(product)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
