import React from 'react' 
import AboutFragment1 from '../assets/images/AboutFragment1.jpg';
import { Link} from 'react-router-dom';
import piazza1 from '../assets/images/piazza1.jpg';
import piazza2 from '../assets/images/piazza2.jpg';
import piazza3 from '../assets/images/piazza3.jpg';
import piazza4 from '../assets/images/piazza4.jpg';


const ContentAbout = () => {
 
  const images=[
    {id:1, image: piazza1},
    {id:2, image: piazza2},
    {id:3, image: piazza3},
    {id:4, image: piazza4},
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

     <section className='bg-[#0c513a] py-20 px-6 flex flex-col m-auto justify-center-items-center'>
      <div className='flex flex-row justify-center items-center gap-10 mb-20 max820:flex-col max820:mb-5'>
        <div className="bg-white/10 shadow-md p-6 w-1/3 max820:w-full py-10">
          <h3 className="text-2xl font-semibold mb-2 text-white">Part of a solid and vibrant community</h3> 
          <p className="text-white text-lg">
            An expected population of more than 4,000 residents ensures a steady, everyday customer base.
          </p>
        </div>
        <div className="bg-white/10 shadow-md p-6 w-1/3 max820:w-full py-10">
          <h3 className="text-2xl font-semibold mb-2 text-white">Direct access to the Lungolago</h3>
          <p className="text-white text-lg">
            Piazza is a natural connection with the lakeside walkway (Lungolago), an active area frequented by residents and visitors alike.
          </p>
        </div>
        <div className="bg-white/10 shadow-md p-6 w-1/3 max820:w-full py-10">
          <h3 className="text-2xl font-semibold mb-2 text-white">Year-round security and maintenance</h3>
          <p className="text-white text-lg">
            A high-standard security environment supported by a professional maintenance system, guaranteeing seamless business operations.
          </p>
        </div>
      </div>

      <div className='flex flex-row justify-center items-center gap-10 max820:flex-col'>
        <div className="bg-white/10 shadow-md p-6 w-1/3 max820:w-full py-10">
          <h3 className="text-2xl font-semibold mb-2 text-white">Flexible commercial typologies</h3> 
          <p className="text-white text-lg">
            Ideal layouts for supermarkets, pharmacies, cafés, restaurants and a wide range of other services
          </p>
        </div>
        <div className="bg-white/10 shadow-md p-6 w-1/3 max820:w-full py-10">
          <h3 className="text-2xl font-semibold mb-2 text-white">Spaces that create experiences</h3>
          <p className="text-white text-lg">
            The Piazza at Rolling Hills Liqeni is not just a commercial center, but a social destination where people meet, enjoy and return.
          </p>
        </div>
        <div className="bg-white/10 shadow-md p-6 w-1/3 max820:w-full py-10">
          <h3 className="text-2xl font-semibold mb-2 text-white">Strategic location</h3>
          <p className="text-white text-lg">
            All essential community services concentrated in one prime destination.
          </p>
        </div>
      </div>  
     </section>

     <section className="py-20 px-6 mx-auto max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-10 p-6 max1300:grid-cols-2 max820:grid-cols-1 overflow-hidden" data-aos="fade-up">
        {images.map((img) => (
          <img 
            key={img.id} 
            src={img.image}
            alt={`Piazza Image ${img.id}`}
            className="h-full hover:scale-110 transition-transform duration-1000 ease-in-out cursor-pointer w-full"
          />
        ))}
      </div>
     </section>
    </> 
  ) 
}

export default ContentAbout;