import React from 'react'

function Order() {
  return (
    <div className='p-4'>
      <table className='w-full  border-separate border-spacing-2'>
        <thead className=''>
          <tr className=''>
            <th>Order Id</th>
            <th className='hidden md:block'>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>

          </tr>
        </thead>
        <tbody className='text-left text-sm md:text-base'>
          <tr className='bg-red-100 '>
            <td className='py-4 px-6'>12354327</td>
            <td className='hidden md:block py-4 px-6'>12-09-2024</td>
            <td className='py-4 px-6'>$65.87</td>
            <td className='hidden md:block py-4 px-6'>Big mamu burger(01), small Pizza(02), Dew 2L(01)</td>
            <td className='py-4 px-6'>On the way(approx 10 minutes)</td>
          </tr> 
          <tr className='odd:bg-gray-100'>
            <td className='py-4 px-6'>12354327</td>
            <td className='hidden md:block py-4 px-6'>12-09-2024</td>
            <td className='py-4 px-6'>$65.87</td>
            <td className='hidden md:block py-4 px-6'>Big mamu burger(01), small Pizza(02), Dew 2L(01)</td>
            <td className='py-4 px-6 text-green-700'>Delivered</td>
          </tr> 
          <tr className= 'odd:bg-gray-200'>
            <td className='py-4 px-6'>12354327</td>
            <td className='hidden md:block py-4 px-6'>12-09-2024</td>
            <td className='py-4 px-6'>$65.87</td>
            <td className='hidden md:block py-4 px-6'>Big mamu burger(01), small Pizza(02), Dew 2L(01)</td>
            <td className='py-4 px-6 text-green-700'>Delivered</td>
          </tr> 
          <tr className=''>
            <td className='py-4 px-6'>12354327</td>
            <td className='hidden md:block py-4 px-6'>12-09-2024</td>
            <td className='py-4 px-6'>$65.87</td>
            <td className='hidden md:block py-4 px-6'>Big mamu burger(01), small Pizza(02), Dew 2L(01)</td>
            <td className='py-4 px-6 text-green-700'>Delivered</td>
          </tr> 
        </tbody>
      </table>
    </div>
  )
}

export default Order