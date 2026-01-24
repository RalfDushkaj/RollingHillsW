import React from 'react'
import {useState} from 'react'
import googleMap from '../constants/googleMap'


const ContentContact = () => {

  const emailIcon = <i className="fa-regular fa-envelope"></i>
  const phoneIcon = <i className="fa-solid fa-phone"></i>
  const mapIcon = <i className="fa-regular fa-map mt-1"></i>

  const info =[
    {
      id:1, 
      icon:phoneIcon, 
      title:"Phone", 
      content:(
        <>
        +355 69 801 4999
        </>
      )
    },
    {
      id:2, 
      icon:emailIcon, 
      title:"E-mail", 
      content:(
       <>
        info@balfinrealestate.com
       </>
      )
    },
    {
      id:3, 
      icon:mapIcon, 
      title:"Address", 
      content:(
        <>
        Farke, Tirane, Albania
        </>

      )},
  ];

  const [form, setForm] =useState({
    name:'',
    email:'',
    message:'',
    agree:false,
  });

  const [error, setError]=useState({})
  const [success, setSuccess]=useState('')

  const validateForm = () => {
    const newError ={};

    if(!form.name.trim()){
      newError.name = "Your Name is Required"
    };

    if(!form.email.trim()){
      newError.email = "Email Address is Required"
    }else if(!/\S+@\S+\.\S+/.test(form.email)){
      newError.email = 'Email is not Valid'
    };

    if(!form.message.trim()){
      newError.message = "Message is Required"
    };

    if(!form.agree){
      newError.agree = 'You Must Agree to our Private Policy'
    };

    setError(newError)
    return Object.keys(newError).length === 0;
  }

  const handleChange = (e) =>{
    const{name, value, type, checked} =e.target;

    setForm((prev) =>({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
      setSuccess('Form submitted successfully!');
      setError({});
    }
  };

  return (
    <>
     <section className='bg-[#dae6e7] py-40 px-10 flex flex-col justify-center max1300:px-0 gap-20 mb-20 max820:gap-1' data-aos="fade-in">
      <div className='flex flex-col justify-center items-center gap-8 mx-auto max-w-6xl'>
        <h1 className='text-6xl font-extrabold text-[#0c513a] text-center max1300:text-6xl '>Location</h1>
        <p className=' w-full text-center text-xl max1300:text-lg'>
            Rolling Hills Liqeni is located near Farka lake, just 5 minutes from TEG and 10 minutes 
            from "Dëshmorët e Kombit" Boulevard. This area is known for its unique ecosystem where 
            its nature is intertwined with the lake to offer a different lifestyle. Thanks to the 
            strategic - geographical position and favorable infrastructure, the area of ​​Farka has 
            turned into an attractive residential and tourist area. There is also increasing interest
            from local and foreign tourists in swimming, cycling, and rowing.
        </p>
      </div>
        <div className="grid grid-cols-3 gap-10 mt-16 max820:grid-cols-1 ">
          {info.map((inf, index) => (
          <div key={inf.id} className='flex flex-col items-center text-center relative px-6 '>  
          {index !== info.length - 1 && (
            <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-48 w-px bg-[#0c513a]/40" />
            )}
            <span className="text-3xl text-[#0c513a] mb-4">{inf.icon}</span>
            <span className="text-xl font-semibold text-[#0c513a] mb-2">{inf.title}</span>
            <span className="text-sm text-[#0c513a]">{inf.content}</span>
          </div>  
        ))}
        </div>
     </section>

     <section className='py-20 px-10 grid grid-cols-2 gap-20 max1300:grid-cols-1' data-aos="fade-up">
      <div className='flex justify-center items-center'>
       <iframe 
        title="Rolling Hills Location"
        src={googleMap} 
        width="100%" 
        height="500" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"/>
      </div>
      
      <div className='flex flex-col justify-start w-full gap-5'>
        <p className='text-4xl text-[#0c513a]'>Contact Now</p>
       <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full mb-5'> 
        <div className='flex gap-5 mt-5'>
          <input
           type='text'
           placeholder='Name'
           name='name'
           value={form.name}
           className='border-2 border-[#0c513a] w-1/2 py-2 px-2'
           onChange={handleChange}
          />
          {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
          <input
           type='email'
           placeholder='Email'
           name="email"
           value={form.email}
           className='border-2 border-[#0c513a]  w-1/2 py-2 px-2'
           onChange={handleChange}
          />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
        </div>

        <textarea
         type='text'
         placeholder='Message'
         name="message"
         value={form.message}
         className='border-2 border-[#0c513a] h-[150px] w-full px-2 py-2'
         onChange={handleChange}
        />
        {error.message && <p className="text-red-500 text-sm font-medium">{error.message}</p>}
        <div className='flex flex-row gap-2 justify-center max600:flex-col'>
          <input
          type='checkbox'
          name="agree"
          value={form.agree}
          onChange={handleChange}
          />
          {error.agree && <p className="text-red-500 text-sm">{error.agree}</p>}
          <span className='text-gray-700'>I CONFIRM THAT I HAVE READ AND AGREE TO THE PRIVACY POLICY</span>
        </div>
         {success && <p className="text-green-500 text-sm">{success}</p>}
        </form>
        <button onClick={handleSubmit} type='submit' className='bg-[#0c513a] text-white text-2xl py-2 hover:bg-[#0a3f2d] transition ease-in-out '>
          Submit
        </button>
      </div>
     </section>
    </>
  )
}

export default ContentContact;