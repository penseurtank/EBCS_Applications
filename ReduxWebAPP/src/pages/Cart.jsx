import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const products = useSelector((state) => state.cart.data)
  const dispatch = useDispatch();


  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.map((product) => (
            <div className='cartCard' key={product.id}>
              <img src={product.image} alt='cart_items' />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btnR' onClick={() => { handleRemove(product.id) }}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart