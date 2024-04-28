"use client"
import Link from 'next/link'
import Image from 'next/image'


const Carticon = () => {
  return (
  <Link href='/cart' className='flex items-center justify-center gap-2'> 
  <div className='relative w-8 h-8 md:w-5 md:h-5'> 
    <Image src="/cart.png" alt="" fill />
  </div> 
  <span>Cart(03)</span>
  </Link>
  )
}

export default Carticon