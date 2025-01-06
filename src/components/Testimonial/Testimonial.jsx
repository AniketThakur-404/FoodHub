import React from 'react'
import Slider from "react-slick";
const testimonialData = [
  {
    id: 1,
    name: "Deadpool",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Soldier Boy",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Son Goku",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
    <div className='py-10'>
        <div className="container">
             {/* Header section */}
             <div className=" text-center mb-20 max-w-[400px] mx-auto">
                <p className=' text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Testimonial</p>
                <h1 className=' text-3xl font-bold'>Testimonial</h1>
                <p className='text-xs text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, magni eligendi? Nulla inventore impedit, deserunt numquam veritatis cupiditate placeat, magni sint commodi aspernatur facere aut et mollitia esse reiciendis molestiae!</p>
            </div>
            {/* testimonial section*/}
            <div className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
                <Slider { ...settings}>
   {
    testimonialData.map(({id, name, text, img })=>{
      return (
        <div className='my-6' key={id} >
          <div className='flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 rounded-xl dark:bg-gray-800 dark:text-white bg-primary/10 relative'>
            <img src={img} 
            className='rounded-full block mx-auto'
            alt="" />
            <h1 className='text-xl font-bold'>{name}</h1>
            <p className='text-gray-500 text-sm'>{text}</p>
          </div>
        </div>
      )
    })
   }                 
                </Slider>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Testimonial