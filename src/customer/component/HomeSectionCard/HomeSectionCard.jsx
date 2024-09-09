import React from 'react';

const HomeSectionCard = ({product}) => {
    return (
        <>
            <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg overflow-hidden 
                           shadow-lg w-[15rem] mx-2 '>
                <div className='h-[17rem] w-[12rem]'>
                    <img className='object-cover onject-top w-full h-full' 
                    src={product.imageUrl} alt='kurta' />
                </div>
                <div className='p-4'>
                    <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
                    <p className='mt-2 text-sm text-gray-500'>
                        {product.title}
                    </p>
                </div>
            </div>
        </>

    )

}
export default HomeSectionCard 