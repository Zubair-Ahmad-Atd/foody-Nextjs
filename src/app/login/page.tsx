import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div className='flex justify-center items-center p-4'> 
      {/* box */}
      <div className='h-[100vh-6rem] w-full shadow-md flex flex-col md:flex-row md:gap-4 justify-center p-4 md:p-8'>
        {/* image container */}
        <div className='relative w-full h-[50vh] md:w-[30%]'> 
            <Image src='/loginBg.webp' alt='' fill className='object-cover'/>
        </div>
      
      {/* form container */}
      <div className='py-4 flex flex-col gap-4 md:w-[30%]'> 
        <h1 className='text-2xl font-bold'>Welcome</h1>
        <p>Login Your account or create new one using socail buttons</p>
        <button className='ring-1 ring-orange-200 flex gap-8 p-3'>
          <Image  src="/google.png" alt='' width={20} height={20}/>
          <span>Sign in with Google</span>
        </button>
        <button className='ring-1 ring-blue-200 flex gap-8 p-3'>
          <Image  src="/facebook.png" alt='' width={20} height={20}/>
          <span>Sign in with Facebook</span>
        </button> 
        <p>Have a problem?<Link href= "/" className='hover:underline'>Contact Us</Link></p>
      </div>
    </div> 
    </div>
    

  )
}

export default Login