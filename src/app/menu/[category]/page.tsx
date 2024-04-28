import { pizzas } from '@/data'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function MenuCategory() {
  return (
  <div className='text-red-500 flex flex-wrap'> 
  {pizzas.map(item=>( 
    <Link  href={`/product/${item.id}`} key={item.id} className='w-full sm:w-1/2 md:w-1/3 h-[60vh] border-b-2 border-r-2 border-red-500 p-2 flex flex-col justify-between group even:hover:bg-yellow-100 odd:hover:bg-fuchsia-100'> 
     
      <div className='relative w-full h-[70%]'> 
        <Image src={item.img} alt='' fill className='object-contain' />
      </div>
    
    <div className='flex items-center justify-between uppercase font-bold'> 
      <h1 className='text-xl'>{item.title}</h1>
      <p className='group-hover:hidden'>${item.price}</p>
      <button className='hidden group-hover:block uppercase bg-red-500 rounded-md text-white p-1'>Add Cart</button>
    </div>
    </Link>
  ))}
  </div>
  )
}

export default MenuCategory