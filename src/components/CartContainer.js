import React  from 'react'
import CartItems from './CartItems'
import {useSelector,useDispatch } from 'react-redux'
import { openModal } from '../features/modal/modalSlice'

const CartContainer = () => {
    const {amount,total,cartItems} = useSelector((store)=>store.cart)
    const dispatch = useDispatch();
    if(amount<1){
        return (
            <section className='cart'>
                <header>
                    <h2>Your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
  return (
    <section className='cart'>
        <header>
            <h2>your bag</h2>
        </header>
        <div>
            {cartItems.map((items)=>{
                return <CartItems key={items.id} {...items}/>
            })}
        </div>
        <footer>
            <hr />
            <div className='cart-total'>
                <h4>
                    total <span>${total}</span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={()=>{dispatch(openModal())}}>clear cart</button>
        </footer>
    </section>
  )
}

export default CartContainer