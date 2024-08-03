import Image from 'next/image';
import * as React from 'react';

export default function FoodCard() {
  return (
    <>
        <div className='flex border-gray-200 bg-pink-50'>
            <Image src="/Brisket.webp" height={100} width={100} alt='Brisket'/>
            <div className='bg-white border-r-[20px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative'>
                <h1>Brisket</h1>
                <h2>Blah Blah Blah Brisket is good</h2>
                <span className='pr-[18px]'>$40.00</span>
                <button>Order Now</button>
            </div>
        </div>
    </>
  );
}