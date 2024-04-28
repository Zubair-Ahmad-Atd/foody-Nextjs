import Image from 'next/image'
import Count from './Countdown';

const Offer = () => {
  return (
    <div className='flex flex-col md:flex-row md:h-[80vh] items-center justify-center gap-3 bg-[url("/offerBg.png")] p-8'>
        {/* text */}
        <div className='flex flex-col items-center justify-center text-white gap-8'> 
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold uppercase'>Delicious Burger & French Fry</h1>
            <p className='text-center lg:text-2xl'>  Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.</p> 
          <Count />
          <button className='bg-red-500 text-white py-3 px-6'>Order Now</button>
        
        </div>
        {/* image */}
        <div className='relative w-screen h-[30vh] lg:h-[50vh]'>
            <Image src='/offerProduct.png' alt='' fill
            className='object-contain'
            />
        </div>
    </div>
  )
}

export default Offer