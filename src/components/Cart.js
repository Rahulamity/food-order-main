import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { clearCart } from '../store/cartSlice'
import ItemList from './ItemList'

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)
    const handleClearCart = () => {
        dispatch(clearCart())
    }
  return (
    <div className="container mx-auto px-4 py-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-500">Cart</h1>
      <div className="w-6/12 m-auto bg-white p-4 rounded-lg shadow-md">
        <button
          className="text-white bg-red-500 hover:bg-red-700 p-2 m-2 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1 className="text-red-500"> Cart is empty. Add Items to the cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  )
}

export default Cart


