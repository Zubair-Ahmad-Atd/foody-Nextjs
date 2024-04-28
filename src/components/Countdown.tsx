"use client"
import Countdown from 'react-countdown'
import { useEffect } from 'react';
import { useState } from 'react';


const endDate = new Date("2024-04-09");
const Count = () => {
    
  return ( 
      <>
    
    {/* // <p className='text-xl text-yellow-500'>{endDate.toString()}</p> */}
    {/* <time dateTime='endDate' suppressHydrationWarning /> */}

    <Countdown className='text-xl text-yellow-500' date={endDate.toString()} />
    
    </>
  )
}

export default Count