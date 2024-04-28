import Image from 'next/image'
import React from 'react'
import { menu } from '@/data'
import Link from 'next/link';
import { url } from 'inspector';

function MenuPage() { 
  return (   

    
    
   <div className='h-[calc(100vh-6rem)] md:h-[calc(100-9rem)] p-4 md:p-10 lg:p-15 flex flex-col md:flex-row items-center overflow-hidden'>
    {menu.map((category)=>( 
     <Link  href={`menu/${category.slug}`} 
     key={category.id}
     className='bg-cover w-full h-1/3 md:h-64 p-8' 
     style={{backgroundImage:`url(${category.img})`}}
      
      > 
      <div className={`w-1/2  text-${category.color}`}> 
        <h1 className='font-bold uppercase '>{category.title}</h1>
        <p className='text-sm '>{category.desc}</p>
        <button className={`hidden md:block bg-${category.color} `}>Explore</button>
      </div>
     </Link>

    ))}

   </div>
);
}

export default MenuPage