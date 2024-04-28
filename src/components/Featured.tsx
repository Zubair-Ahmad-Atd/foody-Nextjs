import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'

const Featured = () => {
  return ( 
    
    <div className='w-screen overflow-x-scrol'> 
        {/* wrapper */}
        <div className='w-max flex '>
        {/* single container */}
        { featuredProducts.map((item) =>
        <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around text-red-500 p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw]'> 
            {/* image conatainer */}
            { item.img && (<div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-300'>
                <Image src={item.img} alt="" fill 
                className='object-contain '/>
            </div>)}
            {/* text conatiner */}
            <div className=' flex-1 flex flex-col items-center gap-4 ' >
                <h1 className='text-xl font-bold uppercase'>{item.title}</h1>
                <p className='text-center'>{item.desc}</p>
                <span className='font-bold'>{item.price}</span>
                <button className='bg-red-500 text-white rounded-md p-1'>Add Cart</button>
            </div>
        </div>)}
        </div>
    </div>
  )
}

export default Featured