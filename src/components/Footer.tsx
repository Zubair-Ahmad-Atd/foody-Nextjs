import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='h-12 md:h-24 text-red-500 flex items-center justify-between p-4 lg:p-10 xl:p-24'>
      <Link href='/'className='uppercase font-bold'>Mamu Burger</Link>
      <span>All right reserved</span>
    </div>
  )
}

export default Footer