import React from 'react'
import Image from 'next/image'
import { singleProduct } from '@/data'
import Price from '@/components/Price'
function Product() {
  return (
    <div className='h-screen text-red-500 flex flex-col justify-around md:flex-row p-4 md:p-10 lg:p-15'>
      {/* image container */}
      {singleProduct.img && ( 
         <div className='relative h-1/2 w-full '> 
        <Image src={singleProduct.img} alt="" fill className="object-contain" />
      </div>
    )}
     
      {/* Text container */}
      <div className='h-1/2 flex flex-col gap-4'>
        
        <h1 className='text-2xl font-bold uppercase'>{singleProduct.title}</h1>
        <span>{singleProduct.desc}</span>
      
      <Price  price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
       
      </div>
      
    </div>
  )
}

export default Product