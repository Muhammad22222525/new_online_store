import React, { useEffect, useState } from 'react'
import H2 from "../Typography/H2"
import ProductsCart from '../components/ProductsCart';
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function DiscProducts() {
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
      <H2>Товари по акции</H2>
       <div className="embla" ref={emblaRef} >
         <div className="embla__container flex gap-8">
          {data.map((item, index) => (
            <div className="embla_slide">
            <ProductsCart key={index} item={item} />
            </div>
                    ))}
        </div>
       </div>
    </div>
  )
}

export default DiscProducts