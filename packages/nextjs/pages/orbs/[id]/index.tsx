import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {FaTwitter } from 'react-icons/fa';

const Index = ({params}) => {
  return (
    <>
    <div className='p-10'>
      <div className='flex items-center justify-center gap-10'>
        <Image className="rounded-full" width={150} height={150} src="/avatar-icon0002_750950-43.webp" alt="avatar-img" />
        <h1 className='font-bold text-[28px]'>Harsh's ORB</h1>
        <Link className='hover:text-blue-700 text-lg' href='https://twitter.com/sherlockvarm'>
          <FaTwitter className='text-lg' />
        </Link>
      </div>
      <div>
        <h3 className=' font-semibold text-[20px]'>ORB Details</h3>
        <div>
            <p>
              Current Price
            </p>
            <p>
              Created By
            </p>
            <p>
              Slot
            </p>
            <p>
              Transaction Rate
            </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Index
