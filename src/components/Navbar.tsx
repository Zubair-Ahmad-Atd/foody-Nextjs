import Link from 'next/link'
import Image from 'next/image'
import MenuComponent from './Menu'
import Carticon from './Carticon'

function Navbar() { 
  const user = false
  return (
    <div className='h-12 md:h-20 text-red-500 flex justify-between items-center p-4 lg:p-10 xl:p-15 border-b-2 border-b-red-400 cursor-pointer uppercase'> 
        <div className='hidden md:flex gap-4 flex-1'> 
          <Link href='/'>HomePage</Link>
          <Link href='/menu'>Menu</Link>
          <Link href='/orders' >Orders</Link>
          {/* <Link href='/contact'>Contact</Link> */}
        </div>
        <div className='text-xl md:font-bold  text-center'> 
            <Link href="/">Mamu Barger</Link>
        </div>
        <div className='md:hidden'> 
            <MenuComponent />
        </div> 
        <div className='hidden  md:flex items-center gap-4 justify-end flex-1'> 
          <div className='text-white bg-orange-400 px-2 flex gap-2 rounded-md md:absolute top-2 right-2 lg:static'>
            <Image src = "/phone.png" alt="" width={20} height={20}
          />
          <span>03343543723</span>
          </div>
          {!user ? (<Link href='/login'>Login</Link>):
          (<Link href='/order'>Orders</Link>)}
          <div><Carticon /></div>
        </div>
    </div>
  )
}

export default Navbar