
import React, { useState, useEffect } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products', {
                    signal: controller.signal
                });
                const data = await res.json();
                console.log(data);
                setProducts(data);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Fetch error:', error);
                }
            }
        }

        fetchProducts();

        return () => {
            controller.abort(); // Cleanup function
        }
    }, [])

    const handleClick = () => {
        console.log('add to cart action triggered...')
    }

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
                    <button className="btn" onClick={handleClick}>Add to cart</button>
                </div>
            ))}
        </div>


    )
}

export default Products