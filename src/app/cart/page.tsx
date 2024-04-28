import Image from 'next/image'
import React from 'react'

function Cart() {
  return (
    <div className='flex flex-col md:flex-row  w-full h-[100vh-6rem] text-red-500'> 
      {/* cart container */}
      <div className='flex flex-col md:flex-row md:w-2/3 md:flex-wrap'>
       <div className='  flex justify-around items-center md:w-full '> 
      <Image src= "/temporary/p1.png" alt='' width={100} height={100} /> 
        <div>
          <h1 className='text-xl font-bold uppercase'>Pizza</h1>
          <span>Large</span>
        </div>
      <span className='text-xl font-bold'>$29.70</span>
      <span>X</span>
      </div> 
      <div className=' h-1/2 flex justify-around items-center md:w-full '> 
      <Image src= "/temporary/p1.png" alt='' width={100} height={100} /> 
        <div>
          <h1 className='text-xl font-bold uppercase'>Pizza</h1>
          <span>Medium</span>
        </div>
      <span className='text-xl font-bold'>$29.70</span>
      <span>X</span>
      </div> 
      <div className=' flex justify-around items-center md:w-full'> 
      <Image src= "/temporary/p1.png" alt='' width={100} height={100} /> 
        <div>
          <h1 className='text-xl font-bold uppercase'>Pizza</h1>
          <span>Small</span>
        </div>
      <span className='text-xl font-bold'>$29.70</span>
      <span>X</span>
      </div>
      </div>
     
      {/* payment container */}
      <div className=' bg-fuchsia-200 p-10 md:w-1/3'> 
        {/* values container */}
        <div className='flex flex-col gap-4'> 
           <div className='flex justify-between'>
          <span>Cart(03)pizza</span>
          <span>$67.98</span>
        </div> 
        <div className='flex justify-between'>
          <span>Cart(03)pizza</span>
          <span>$67.98</span>
        </div>  
        <div className='flex justify-between '>
          <span>Cart(03)pizza</span>
          <span className='text-green-500 text-xl'>FREE!</span>
        </div> 
          </div>
       
         
        <hr className='p-3'/>  
        <div className='flex justify-between'>
          <span className='uppercase'>Total(incl tax) </span>
          <span className=''>$56.98</span>
        </div> 
        
        {/* button container */}
        <div className='flex justify-end p-10'>
          <button className='bg-red-500 text-white uppercase p-2'>Checkout</button>
        </div>
        
      </div>
    </div>
  )
}

export default Cart