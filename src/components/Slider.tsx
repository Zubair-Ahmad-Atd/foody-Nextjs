"use client"
import React, { useEffect } from 'react'
import Image from 'next/image' 
import { useState } from 'react';



const data:any = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/slide1.jpg",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in NY",
      image: "/slide2.jpg",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/slide3.jpg",
    },
  ];
  

const Slider = () => { 
    const [currentSlider, setCurrentSlider] = useState(0); 
    useEffect(()=>{ 
        const interval = setInterval(
            ()=>setCurrentSlider( (prev) => (prev === data.length -1 ? 0 : prev + 1)),
            2000);
        return ()=> clearInterval(interval)
    },[])
  return (
    <div className='h-[calc(100vh-6rem)] flex flex-col items-center justify-center md:flex-row md:w-full'> 
        <div className='h-1/2 flex flex-col items-center justify-center gap-4 md:w-1/2 md:h-full bg-fuchsia-50'>
            <h1 className='text-red-500 font-bold text-2xl uppercase text-center px-4'>{data[currentSlider].title}</h1>
            <button className='bg-red-500 px-2 text-white '>Order Now</button>
        </div> 
        <div className='relative h-1/2 w-full  md:w-1/2 md:h-full'>
            <Image src={data[currentSlider].image} alt='' fill  
            className='object-cover'
            />
            
        </div>
    </div>
  )
}

export default Slider