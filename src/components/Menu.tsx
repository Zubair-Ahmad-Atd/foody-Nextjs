"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Carticon from './Carticon';

const links = [
    { id: 1, title: "HomePage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Orders", url: "/orders" },
    // { id: 4, title: "Contact", url: "/" },
]


const MenuComponent = () => {
    const [open, setOpen] = useState(false);
    const user = false;
    return (
        <div>
            {!open ? (

                <Image src='/open.png' alt='image' width={20} height={20} onClick={() => setOpen(true)} />
            ) :
                (
                    <Image src='/close.png' alt='image' width={20} height={20} onClick={() => setOpen(false)} />
                )}
             {open && (<div className='absolute left-0 top-24 bg-red-500 text-white w-full h-[calc(100vh-6rem)] flex flex-col gap-5 justify-center items-center z-10'>
                {links.map((item:any) => <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>)}
             {!user? 
             (<Link href='/login' onClick={()=>setOpen(false)}>login</Link>):
             (<Link href='/orders' onClick={()=>setOpen(false)}>Orders</Link>) 
            } 
             <div onClick={()=>setOpen(false)}>
              <Carticon />
            </div>
             </div>)}


        </div>
    );
};

export default MenuComponent