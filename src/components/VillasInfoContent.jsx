import React from 'react'
import { types } from '../constants/data';
import { useParams } from 'react-router-dom';

const VillasInfoContent = () => {

  const { slug } =useParams();
  const villaType = types.find((type) => type.slug === slug);

  if (!villaType) {
    return <p className='text-center text-6xl'> Villa type not found </p>;
  }

  const floors = Object.keys(villaType).filter(key => key.startsWith("floor"))

  return (
    <>
    <section className='my-10 '>
      <div className='bg-[#1e5a47] flex justify-center py-10'>
        <h1 className='text-6xl text-center text-white'>
         {villaType.label}
        </h1>
      </div>
    </section>

    <section className='px-10 py-20 flex justify-center'>
      <div className='flex flex-row justify-center items-center max1300:flex-col gap-20'>
        <div className='w-1/2 flex flex-col max1300:w-full mb-10'>
        
          <h2 className='text-5xl text-[#127245] text-center font-medium mb-20'>Villa Specifications</h2>
          <ul className='flex gap-4 flex-col'>
             {/* Floors */}
            {floors.map((floor, index) => (
              <li
                key={floor}
                className="flex justify-between border-b border-gray-300 pb-2"
              >
                <span className="font-medium text-2xl text-[#137446]">
                  Floor {index}
                </span>
                <span className='text-2xl text-[#137446]'>
                  {villaType[floor]}
                </span>
              </li>
            ))}

            {/* Lounge */}
            {villaType.lounge && (
              <li className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-medium text-2xl text-[#137446]">Lounge</span>
                <span className='text-2xl text-[#137446]'>{villaType.lounge}</span>
              </li>
            )}

            {/* Total Area */}
            <li className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-medium text-2xl text-[#137446]">Total Area</span>
              <span className='text-2xl text-[#137446]'>{villaType.total}</span>
            </li>

            {/* Yard */}
            <li className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-medium text-2xl text-[#137446]">Yard Area</span>
              <span className='text-2xl text-[#137446]'>{villaType.yard}</span>
            </li>

            {/* Plot Area */}
            <li className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-medium text-2xl text-[#137446]">Plot Area</span>
              <span className='text-2xl text-[#137446]'>{villaType.plotArea}</span>
            </li>

            {/* Above Ground Area */}
            <li className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-medium text-2xl text-[#137446]">Above Ground Area</span>
              <span className='text-2xl text-[#137446]'>{villaType.aboveGround}</span>
            </li>
          </ul>
        </div>

        <div className='w-1/2'>
          <img
          src={villaType.planImage}
          />
        </div>
      </div>
    </section>

    <section className='flex flex-row gap-10 max1300:flex-col'>
     <div></div>
     <div></div>
     <div></div>
    </section>

    </>
  )
}

export default VillasInfoContent;