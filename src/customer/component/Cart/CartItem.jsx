import { Button, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem =()=>{
    return (
        
        <div className='p-5 shadow-large border-rounded-md flex'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src="https://assets.entrepreneur.com/content/3x2/2000/1664172963-leadcopy.jpg" alt="Shradha Kapoor"/>
            </div>
            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>Black colored , threded pattern  BodyCon dress</p>
                <p className='opacity-70 font-medium text-gray-900'>size: L&nbsp;, Black</p>
                <p className='opacity-70 font-medium  mt-2 text-gray-900'>seller: Abhishek Gupta</p>
                <div className='flex space-x-5 items-center text-gray-900 mt-2'>
                    <p className='font-semibold'>Rs19900</p>
                    <p className='opacity-50 line-through'>Rs21000</p>
                    <p className='font-semibold text-green-600'>5% off</p>
                </div>
           
            <div className='lg;flex items-centerr lg:space-x-10 pt-4'>
              <div className='flex items-center spce-x-2'>
              <IconButton >
              <RemoveCircleOutlineIcon/>
              </IconButton>
              <span className='font-medium text-gray-500 py-1 px-7 rounded-sm border'>3</span>
              <span className=''>
              <IconButton sx={{color:"blueviolet"}} >
              <AddCircleOutlineIcon/>
              </IconButton>
              </span>
              
              <div>
                <Button>Remove</Button>
              </div>
              </div>
            </div>
        </div>
    </div> </div>
    
        
    )
}

export default CartItem