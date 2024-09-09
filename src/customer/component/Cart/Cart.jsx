import React from 'react';
import CartItem from './CartItem';
import { Button } from '@mui/material';


const Cart = ()=>{

    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    {[1 , 1 ,1,1,1].map((item)=> <CartItem/>)}</div>
                <div className='px-5 stickey top-2 h-[100vh] mt-8 lg:mt-4'>
                <div className='border'>
                <p className='uppercase font-bold opacity-50 pb-4 px-2'>
                 Price Details
                <hr/>
                </p>
                <div className='space-y-3 font-semibold px-4'>
                <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹4564</span>
                </div>
                
                </div>
                <div className='space-y-3 font-semibold px-4'>
                <div className='flex justify-between pt-3 text-black'>
                <span >Discount</span>
                <span className='text-green-600'>-₹345</span>
                </div>
                
                </div>
                <div className='space-y-3 font-semibold px-4'>
                <div className='flex justify-between pt-3 text-black'>
                <span>Deleviery Charge</span>
                <span className='text-green-600'>Free</span>
                </div>
                
                </div>
                <div className='space-y-3 font-semibold px-4 mb-10'>
                <div className='flex justify-between pt-3 text-black'>
                <span className='text-green-600'>Total</span>
                <span className='text-green-600'>₹4134</span>
                </div>
                </div>
                <Button variant="contained" sx={{px:"2.5rem" , py:".7rem"}} className='w-full'>Checkout</Button>
                </div>
                
             </div>
                 </div> 
                    </div>
    )
}
export default Cart;