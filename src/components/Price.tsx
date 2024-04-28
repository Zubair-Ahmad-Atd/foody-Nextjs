"use client"
import { singleProduct } from '@/data';
import React, { useEffect } from 'react'
import { useState } from 'react';

interface Props {
    price: number
    id: number
    options?: { title: string; additionalPrice: number }[]


}
const Price = ({ price, id, options }: Props) => {
    const [total,setTotal] = useState(price)
    const [select,setSelect] = useState(0)
    const[quantity,setQuantity] = useState(1)
 
    useEffect(()=>{  
    setTotal( 
        quantity * (options? price + options[select].additionalPrice:price)
    )
    },[quantity,select,price])
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>${total.toFixed(2)}</h1>
            {/* options container */}
            <div className='flex gap-4'>
                {options && (
                    options.map((val,index) => (
                        <button key={val.title} 
                        className='ring-1 ring-red-500 p-1 rounded-md ' 
                        style={{ 
                            background: select === index?"rgb(239 68 68)":"white",
                            color: select === index? "white":"red"
                            
                        }} 
                        onClick={()=>setSelect(index)}
                        >{val.title}</button>
                    ))
                )} 
            </div> 
            {/* Quantity and Cart container */}
            <div className='flex justify-between items-center'> 
              {/* Quantity container */}
                <div className='flex justify-between w-full ring-1 ring-red-500 p-3' >
                    <h2>Quantity</h2> 
                    <div className='flex gap-2'>
                    <button 
                    onClick={()=>setQuantity(quantity === 1? 1 : quantity - 1)}
                    >{'<'}</button>
                    <span>{quantity}</span>
                    <button 
                    onClick={()=>setQuantity(quantity === 9? 9 :quantity + 1)}
                    >{'>'}</button>
                    
                    </div>
                
                </div>  
                {/* Cart container */}
                <button className='uppercase bg-red-500 text-white  w-56 ring-1 ring-red-500 p-3'>Add to cart</button>
                
            </div>
        </div>
    )
}

export default Price