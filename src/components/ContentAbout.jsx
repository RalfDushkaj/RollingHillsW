import React, { useState } from 'react' 
import AboutFragment1 from '../assets/images/AboutFragment1.jpg';
import { Link} from 'react-router-dom';
import piazza1 from '../assets/images/piazza1.jpg';
import piazza2 from '../assets/images/piazza2.jpg';
import piazza3 from '../assets/images/piazza3.jpg';
import piazza4 from '../assets/images/piazza4.jpg';


const ContentAbout = () => {
 
  const advantages =[
    {
      id:1,
      title:"Part of a solid and vibrant community",
      content:"An expected population of more than 4,000 residents ensures a steady, everyday customer base.",
    },
    {
      id:2,
      title:"Direct access to the Lungolago",
      content:"Piazza is a natural connection with the lakeside walkway (Lungolago), an active area frequented by residents and visitors alike.",
    },
    {
      id:3,
      title:"Year-round security and maintenance",
      content:"A high-standard security environment supported by a professional maintenance system, guaranteeing seamless business operations.",
    },
    {
      id:4,
      title:"Flexible commercial typologies",
      content:"Ideal layouts for supermarkets, pharmacies, cafés, restaurants and a wide range of other services.",
    },
    {
      id:5,
      title:"Spaces that create experiences",
      content:"The Piazza at Rolling Hills Liqeni is not just a commercial center, but a social destination where people meet, enjoy and return.",
    },
    {
      id:6,
      title:"Strategic location",
      content:"All essential community services concentrated in one prime destination.",
    },
  ]

  const images=[
    {id:1, image: piazza1},
    {id:2, image: piazza2},
    {id:3, image: piazza3},
    {id:4, image: piazza4},
  ]

  const cards=[
    {id:1, title:"Dedicated parking spaces for service customers"},
    {id:2, title:'Rotating service ramp for delivery vehicles'},
    {id:3, title:'Accessible pathways for strollers, bicycles and people with disabilities'},
    {id:4, title:'Dedicated elevator for goods and products'},
    {id:5, title:'Dedicated panoramic elevator for visitors'},
    {id:6, title:'Direct pedestrian access to the first floor'},
  ]

  
    
  return (
    <>
     <section className='w-full h-[80vh] bg-center bg-cover'>
        <img src={AboutFragment1} alt="About Hero Image" className='w-full h-full object-cover brightness-75'/>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full'>
          <h1 className='text-white text-7xl font-thin drop-shadow-2xl'data-aos='fade-up' >About Us</h1>
          <h3 className='text-white text-5xl font-thin drop-shadow-2xl'data-aos='fade-up'>An exclusive investment opportunity</h3>
        </div>
     </section> 

     <section className='flex py-20 px-48 justify-center-items-center max1300:px-6 max1300:w-full' data-aos="fade-up">
        <div className='mx-auto max-w-4xl px-6 text-center'>
          <h2 className='text-6xl font-medium text-[#0B3B47] mb-8 text-center max1300:w-full'>Rolling Hills Liqeni</h2>
          <p className='text-[#0B3B47] w-full text-xl'>
            With a total area of 300,000 m², over 700 residential units and a community expected to reach 4,000 residents, 
            Rolling Hills Liqeni blends the serenity of nature with premium comfort. Located just 5 minutes from TEG and 
            10 minutes from “Dëshmorët e Kombit” Boulevard, the project offers high-standard villas and premium apartments, 
            a Recreational Park and a dedicated Piazza designed for commercial units and essential services.
          </p>
          <p className='text-[#0B3B47] text-xl w-full mt-4'>
            Strategically positioned at the heart of the residence and easily accessible to both residents and visitors, 
            the Piazza is set to become a new social and economic hub not only for the community of Rolling Hills Lake 
            but for the entire Farka area. An exclusive opportunity for investors, ensuring stable returns and strong 
            business development potential.
          </p> 
        </div>
     </section>

     <section className='bg-[#0c513a] py-20 px-20 flex flex-col m-auto justify-center-items-center max820:px-6' data-aos="fade-up">
      <div className='mx-auto max-xl grid grid-cols-3 gap-10 max1000:grid-cols-1'>
        {advantages.map((adv) => (
          <div className="bg-white/10 shadow-md p-6 w-full py-10" key={adv.id}>
          <h3 className="text-2xl font-semibold mb-2 text-white text-center">
            {adv.title}  
          </h3> 
          <p className="text-white text-lg text-center">
            {adv.content}
          </p>
        </div>
        ))}
      </div>
     </section>

     <section className="py-20 px-6 mx-auto max-w-screen-2xl">
      <h1 className='text-7xl text-[#0B3B47] mb-8 text-center font-bold'>Visaualize Your future</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-10 p-6 max1300:grid-cols-2 max820:grid-cols-1" data-aos="fade-up">
        
        {images.map((img) => (
          <div className='overflow-hidden'>
            <img 
              key={img.id} 
              src={img.image}
              alt={`Piazza Image ${img.id}`}
              className="h-full hover:scale-110 transition-transform duration-1000 ease-in-out cursor-pointer w-full"
            />
          </div>
        ))}
      </div>
     </section>

     <section className='py-20 px-10 bg-[#F5F2EE] max1300:px-10' data-aos="fade-up">
      <h1 className='text-7xl text-[#0B3B47] mb-8 text-center font-bold'>Business Advanatges</h1>
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
         {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-sm p-6 flex items-start justify-center gap-4"
          >
            {/* Check icon */}
              <div className="flex justify-center items-center">
                <div className="w-6 h-6 rounded-full bg-[#0B3B47] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <p className="text-[#0B3B47] text-lg font-light leading-relaxed">
                {card.title}
              </p>
            </div>
            ))}
          </div>    
      </section>

    
    </> 
  ) 
}

export default ContentAbout;