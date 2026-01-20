import React from 'react'
import homefragment1 from '../assets/images/homefragment1.jpg';
import homefragment2 from '../assets/images/homefragment2.png';
import homefragment3 from '../assets/images/homefragment3.jpg'; 
import heroimage from '../assets/images/heroimage.jpg';
import mapLink from '../constants/map';
import { Link } from 'react-router-dom';


const ContentHome = () => {
  return (
    <>
    <section className='w-full h-[91.5vh] bg-center bg-cover'>
        <img src={heroimage} alt="Hero Image" className='w-full h-full object-cover'/>
    </section> 

    <section className='bg-[#E7F1F2] py-10 px-6 flex justify-center align-center' data-aos="fade-up">
      <div className="w-full mx-auto px-10 py-10 flex flex-row gap-20 items-center max1250:flex-col">
        <div className='content md:col-span-6 flex flex-col gap-10'>
          <h2 className='text-4xl font-medium mb-4 text-[#0B3B47]'>
            Welcome To Rolling Hills Liqeni
          </h2>
          <p className="text-lg leading-relaxed mb-8 font-medium">
            Rolling Hills Liqeni lies between the greenery of the hills of Farka and the edge of the lake, in an experience that allows you to enjoy freedom near nature, in the fresh air. A place of peace and relaxation, for an elegant, unique, and luxurious lifestyle. Rolling Hills Liqeni has been conceived as a residential complex with villas and apartments, a piazza with all the necessary services, a green park with sports grounds, and direct access to the ‘Lungolagon’ along Farka Lake.
          </p>
            <a href={mapLink} target="_blank" rel="noopener noreferrer">
            <button className="text-[#0B3B47] font-medium text-lg pb-1 border-b-2 border-[#0B3B47] hover:border-[#2A5F6C] hover:text-[#2A5F6C] transition-colors">
              Look At The Map
            </button>
          </a>
        </div>
        <div className='md:col-span-6 max1250:w-full max1250:max-w-xl mx-auto'>
          <img 
          src={homefragment1} alt="Home Fragment 1"  
          className='rounded-md shadow-lg object-cover w-full h-full'
          />
        </div>
      </div>
    </section>

    <section className='bg-[#ffffff] py-20 px-6 flex justify-center align-center' data-aos="fade-up">
      <div className='mx-auto max-w-4xl px-6 text-center'>
         <h1 className='text-6xl font-medium mb-4 text-[#0B3B47] text-center'>Residences</h1>
         <p className="text-lg leading-relaxed text-center font-medium pt-10">
            Not just a residential residence, but a real community center. A new experience that allows you to enjoy freedom near nature and selected architecture 
            that respects it by enabling lake views from every villa. Regular layout and natural lighting. Villas are designed with lavish spaces in every setting. 
            Based on French neoclassical architecture, they have been treated with a new contemporary spirit and a high priority on build quality.
          </p>
          <Link to="/Villas" rel="noopener noreferrer">
            <button className="text-[#0B3B47] font-medium text-lg pb-1 border-b-2 border-[#0B3B47] hover:border-[#2A5F6C] hover:text-[#2A5F6C] transition-colors mt-10">
              Gaze at the villas
            </button>
          </Link>
      </div>
    </section>

    <section>
      <img src={homefragment2} className='w-full bg-center bg-cover'></img>
    </section>

    <section className='py-20' data-aos="fade-up">
      <div className='mx-auto max-w-4xl px-6 text-center'>
         <h1 className='text-6xl font-medium mb-4 text-[#0B3B47] text-center'>What we Offer</h1>
         <p className="text-lg leading-relaxed text-center font-medium pt-10">
            A Piazza dedicated to various services offering as many facilities as possible to all residents 
            of the residence. Bars, restaurants, markets, and various service units will come in a single space, 
            all in the function of a lifestyle with as many facilities as possible. Everything needed for everyday 
            life can be found inside the residence combined with the many recreational and relaxing spaces.
          </p>
          <Link to="/About" rel="noopener noreferrer">
            <button className="text-[#0B3B47] font-medium text-lg pb-1 border-b-2 border-[#0B3B47] hover:border-[#2A5F6C] hover:text-[#2A5F6C] transition-colors mt-10">
              About Us
            </button>
          </Link>
      </div>
    </section>

    <section className='bg-[#E7F1F2] py-20 px-6 flex flex-row justify-center items-center gap-16 max1300:flex-col' data-aos="fade-up">
       <div className='w-1/2 max1300:w-full max1300:max-w-xl mx-auto'>
         <h1 className='text-4xl font-medium mb-4 text-[#0B3B47]'>The Lungolago and Recreational Park</h1>
         <div className='text-md leading-relaxed font-medium pt-10'>

            <p className='pb-5'>
              Rolling Hills Liqeni offers two vibrant gathering spaces for residents and visitors of all ages: the Recreational Park within the complex and the scenic Lungolago along Farka Lake.
              These spaces are designed to promote a healthy and active lifestyle. Whether you’re looking to exercise, relax, or simply enjoy the outdoors, there’s something for everyone.
            </p>
            <p className='pb-5'>
              Rolling Hills Liqeni offers direct access to the Lungolago, providing the perfect setting for morning or evening runs, long walks, or bike rides.
            </p>
            <p className='pb-5'>
              The architectural design of the Recreational Park has been conceived to create an integrated space that can be enjoyed year-round, featuring various recreational activities such as relaxation, children’s play areas, walking paths, and sports facilities.
            </p>
            <p>
              Inspired by the natural characteristics of the area, the park’s design prioritizes sustainability, creating a space that enhances the environment while minimizing its impact.
            </p>

          </div>
       </div>

       <div className='w-1/2 flex justify-center max1300:w-full max1300:max-w-xl mx-auto'>
          <img src={homefragment3} alt="Home Fragment 3" className='rounded-md shadow-lg object-cover w-full h-full'></img>
       </div>
    </section>

    
    
    </>
  )
}

export default ContentHome
