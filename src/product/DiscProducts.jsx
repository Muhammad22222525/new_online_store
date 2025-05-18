import React, { useEffect, useState } from 'react'
import H2 from "../Typography/H2"
import ProductsCart from '../components/ProductsCart';
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';


function DiscProducts() {
    const [hidden, setHidden] = useState(false)
  
  const autoplayOptions = {
        delay: 3600, 
        stopOnInteraction: false, 
        stopOnMouseEnter: false, 
      }
  const [data, setData] = useState([])
     const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(autoplayOptions)])
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api?discount=true");
          console.log(response.data.data);
          setData(response.data.data);
        } catch (error) {
          console.error("Error fetching:", error);
        }
      };
  
      fetchProducts();
    }, []);

  return (
    <div>
      <div className=" flex justify-between items-center">
      <Link to="/catalog/true " ><H2>Товари по акции</H2></Link>
        <button className='h-[50px] px-6 rounded-lg bg-blue-400' onClick={() =>setHidden(!hidden)}>{hidden ? <Eye className="stroke-gray-300"/> : <EyeOff className="stroke-gray-300"/>}</button>
      </div>
       <div className="embla" ref={emblaRef} >
         <div className="embla__container flex gap-8">
          {data.map((item, index) => (
            <div className={`embla__slide min-w-[300px] ${hidden ? "inline-block" : "hidden"}`}>
            <ProductsCart key={index} item={item} />
            </div>
                    ))}
        </div>
       </div>
    </div>
  )
}

export default DiscProducts