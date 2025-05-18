import React, { useEffect, useState } from 'react'
import H2 from "../Typography/H2"
import ProductsCart from '../components/ProductsCart';
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


function AllProducts() {
  const autoplayOptions = {
        delay: 3500, 
        stopOnInteraction: false, 
        stopOnMouseEnter: false, 
      }
  const [data, setData] = useState([])
   const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(autoplayOptions)])
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchProducts();
  }, []);

   
  return (
    <div  >
          <H2>Все товари</H2>
        <div className="embla" ref={emblaRef} >
      <div className="embla__container flex gap-8">
        {data.map((item) => (
          <div className="embla__slide min-w-[300px]">
            <ProductsCart item={item} key={item.id}/>
          </div>
        ))}
      </div> 
        </div>
    </div>
  )
}

export default AllProducts