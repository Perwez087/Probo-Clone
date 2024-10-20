import React from 'react';
import { GoArrowRight } from "react-icons/go";
import CaresCard from './utils/CaresCard';

const Cares = () => {
  return (
    <div className='w-full bg-zinc-100 pb-8'>
      <div className='max-w-[1400px] h-full mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-2'>
          <div className='bg-white p-4 flex flex-col justify-between gap-4 rounded-md border'>
            <h1 className='md:text-5xl text-3xl font-bold leading-tight'>What’s <br /> new in <br /> Probo?</h1>
            <div className='self-end'>
              <span title='Read more' className='cursor-pointer'><GoArrowRight size={50} /></span>
            </div>
          </div>
          <CaresCard />
        </div>
      </div>
    </div>
  )
}

export default Cares;
