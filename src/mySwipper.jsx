import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const MySwiper = ({wedase}) => {
    let img = []
    if (wedase.img.length >= 1){
        for(let i = 0; i < wedase.img.length; i++){
             img.push(wedase.img[i])
        }
    }
    console.log(img)
    return (
      <Swiper
        className='border-2 border-black h-full'
        modules={[Navigation, Pagination]}
        spaceBetween={50} 
        slidesPerView={1} 
        loop={true} 
        freeMode={true}
        touchRatio={1}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} 
        pagination={{ clickable: true }}
      >
         {img.length > 0 && img.map((image, index) => (
                   <SwiperSlide className='border-2 border-black h-full object-cover'> <img key={index} src={`${image}`} alt="not found" className="border-2 border-black w-full h-full object-contain" width={180} height={200}/></SwiperSlide>
                   ))}
      </Swiper>
    );
  };
  
  export default MySwiper;