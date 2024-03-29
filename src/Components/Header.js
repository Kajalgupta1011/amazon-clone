import React from 'react'
import Image from 'next/legacy/image'
import {signIn, signOut, useSession} from 'next-auth/react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
export default function Header() {
  // const [session] = useSession();
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems)
  
  return (
    <header className='sticky top-0 z-50'>
        {/* Top header---------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
          <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image
                onClick={()=> router.push('/')}
                src='https:/links.papareact.com/f90'
                width={150}
                height={40}
                objectFit='contain'
                // alt='Logo'
                className='cursor-pointer'
            />
            </div>
            {/* Search ---------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
              <input className='p-2 h-hull w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" placeholder='Search'/>
              <SearchOutlinedIcon className=''/>
              
            </div>
            {/* Right section of header ---------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
              <div onClick={!session ? signIn : signOut} className='link'>
                <p className='hover:underline'>
                  {session ? `Hello, ${session.user.name}`:`Sign In`}
                </p>
                <p className='font-extrabold md:text-sm'>Account & Lists</p>
              </div>
              <div onClick={()=>router.push('/orders')} className='link'>
                <p>Returns</p>
                <p className='font-extrabold md:text-sm'>& Orders</p>
              </div>
              <div onClick={()=>router.push('/checkout')} className='relative link flex items-center'>
                <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                  {items.length}
                  </span>
                <ShoppingCartOutlinedIcon className='h-10'/>
                <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Cart</p>
              </div>
            </div>
        </div>
        {/* Bottom header---------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
            <p className='link flex items-center'>
              <MenuOutlinedIcon className='h-6 mr-1'/>
              All
            </p>
            <p className='link'>Prime video</p>
            <p className='link'>Mobiles</p>
            <p className='link'>Today's Deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food & Delivery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>

        </div>
        
    </header>
  )
}
