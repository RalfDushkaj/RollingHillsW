import React from 'react'
import {Link} from 'react-router-dom'
import Villafragment1 from '../assets/images/villafragment1.jpg';
import Tipi1 from '../assets/Villasimages/Tipi-1.jpg';
import Tipi2 from '../assets/Villasimages/Tipi-2.png';
import Tipi3 from '../assets/Villasimages/Tipi-3.jpg';
import Tipi5 from '../assets/Villasimages/Tipi-5.jpg';
import Tipi6 from '../assets/Villasimages/Tipi-6.jpg';
import Tipi7 from '../assets/Villasimages/Tipi-7.jpg';
import Tipi8 from '../assets/Villasimages/Tipi-8.jpg';
import Tipi9 from '../assets/Villasimages/Tipi-9.jpg';
import Tipi10 from '../assets/Villasimages/Tipi-10.jpg';
import Tipi11 from '../assets/Villasimages/Tipi-11.jpg';
import Tipi12 from '../assets/Villasimages/Tipi-12.jpg';

const ContentVillas = () => {

  const types =[
    {id:1, label:"Type 1", image:Tipi1},
    {id:2, label:"Type 2", image:Tipi2},
    {id:3, label:"Type 3", image:Tipi3},
    {id:4, label:"Type 4", image:Tipi1},
    {id:5, label:"Type 5", image:Tipi5},
    {id:6, label:"Type 6", image:Tipi6},
    {id:7, label:"Type 7", image:Tipi7},
    {id:8, label:"Type 8", image:Tipi8},
    {id:9, label:"Type 9", image:Tipi9},
    {id:10, label:"Type 10", image:Tipi10},
    {id:11, label:"Type 11", image:Tipi11},
    {id:12, label:"Type 12", image:Tipi12},
  ]

  return (
    <>
      <section className='w-full h-[80vh] bg-center bg-cover overflow-hidden'>
         <img src={Villafragment1} alt="Villas Hero Image" className='w-full h-full object-cover brightness-90 animate-zoom-in'/>
         <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
           <h1 className='text-white text-7xl font-thin drop-shadow-2xl' data-aos='fade-up'>Experienxe premium style in every detail</h1>
         </div>
      </section>

      <section className="py-20 px-6 flex justify-center items-center" data-aos="fade-up">
        <div className='mx-auto max-w-4xl px-6 text-center'>
           <h1 className='text-7xl font-medium mb-4 text-[#0B3B47] text-center'>Villas</h1>
           <p className='text-lg leading-relaxed text-center font-medium'>
              Not just a residential residence, but a real community center. A new experience that allows you to enjoy freedom near nature 
              and selected architecture that respects it by enabling lake views from every villa. Regular layout and natural lighting. 
              Villas are designed with lavish spaces in every setting. Based on French neoclassical architecture, they have been treated 
              with a new contemporary spirit and a high priority on build quality.
           </p>
        </div>
      </section>

      <section className='flex justify-center items-center py-20 px-6' data-aos="fade-up">

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl overflow-hidden">
          {types.map((type) => (
            <a 
              key={type.id} 
              className='relative overflow-hidden rounded-lg border border-gray-200 shadow-md aspect-[4/3]'
              >
              <img 
                src={type.image} 
                alt={type.label} 
                className='h-full hover:scale-110 transition-transform duration-1000 ease-in-out cursor-pointer w-full'
                />
              <button
                className="absolute top-1/2 left-1/2 z-10 
                    -translate-x-1/2 -translate-y-1/2
                    bg-emerald-900 text-white 
                    px-8 py-3 rounded-full 
                    text-sm font-semibold tracking-wide
                    shadow-lg"
                >
                {type.label}
                </button>
            </a>
          ))}

         </div>
      </section>
    </>
  );
};

export default ContentVillas;