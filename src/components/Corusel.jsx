import React from 'react'
import Img2 from "../assets/img/frontf.jpg" 
import { ArrowLeft, ArrowRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function Corusel() {
  const autoplayOptions = {
        delay: 1000, 
        stopOnInteraction: false, 
        stopOnMouseEnter: false, 
      }
   const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(autoplayOptions)])
  return (
    <div className='relative embla -mt-5 ' ref={emblaRef}>
       <div className='relative w-full lg:h-[500px] md:h-[400px] embla__container'>
         <div className="embla_slide">
             <img src={Img2} alt="logo45" className='w-full h-full object-cover' />
          <div className="absolute z-20 top-[82px] left-[100px] w-[325px] h-[346px]">
            <h2 className='text-6xl font-black text-[#383838]'>Вкусные фрукты</h2>
            <p className='mt-5 text-lg text-gray-600'>Большой выбор фруктов. Сочная, мясная для любого бюджета</p>
           <div className="mt-8 w-[150px] flex justify-between">
              <button className='p-[15px] bg-[#1074EB] rounded-sm'><ArrowLeft /></button>
             <button className='p-[15px] bg-[#1074EB] rounded-sm'><ArrowRight /></button>
         </div>
    </div>
  </div>

  
 
</div>
    </div>
  )
}

export default Corusel