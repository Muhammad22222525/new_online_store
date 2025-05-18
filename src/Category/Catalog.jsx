import React, { useState } from 'react'
import H3 from "../Typography/H3"
import { useEffect } from 'react';
import axios from 'axios';
// import {  ShoppingCart } from 'lucide-react'
// import { Link } from 'react-router-dom'
import ProductsCart from '../components/ProductsCart';
import H2 from "../Typography/H2"
import useProductsFilter from '../hooks/useProductsFilter';
import Pagination from '../components/Pagination';
function Catalog() {


 

 
 const [data, setData] = useState([])
 const [pagData, setPagData] = useState([])


  const { page,   from, to, setFilters } = useProductsFilter();
  
  const [category, setCategory] = useState("meat");
  const [discount, setDiscount] = useState(false);

  useEffect(() => {
        const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/?page=${page}&category=${category}&discount=${discount}&from=${from}&to=${to}`);  
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchProducts();
    
  }, [page, category, from, to, discount]);


     useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api?page=${page}` );
        setData(response.data.data);
        setPagData(response.data.pagination);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchProducts();
  }, [page]);

  
  return (
    <>
    <div className="max-w-[1140px] mx-auto">
            <H2>Каталог Товаров</H2>
            </div>
    <div className="flex flex-col max-w-[1140px] gap-7 mx-auto ">
      
    <div className='flex gap-6 '>
        <div className="max-w-[363px] bg-[#F7F7F7] py-8 px-5 h-[650px]">
           <div className="h-[170px] border-b-1 border-[#C9C9C9]">
             <H3>Категория</H3>
            <select className='p-4 rounded-[3px] text-[#9C9C9C] bg-[#FFFFFF] w-[223px]'
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)              
            } }
            >
              <option value="vegetables" className='text-[#9C9C9C]'>Овощи</option>
              <option value="fruits" className='text-[#9C9C9C]'>Фрукты</option>
              <option value="meat" className='text-[#9C9C9C]'>Мясные</option>
              <option value="dairy" className='text-[#9C9C9C]'>Молочные</option>
            </select>
           </div>
           <div className="h-[170px] border-b-1 border-[#C9C9C9]">
             <H3>Цена</H3>
            <span className='flex gap-2 items-center'> <input 
            type="number"
            placeholder='от' 
            className='w-[106px] p-4 bg-[#FFFFFF] rounded-[3px]'
            value={from}
            onChange={(e) => setFilters({ from: e.target.value })}

            />
            :
             <input 
             type="number" 
             placeholder='до' 
             className='w-[106px] p-4 bg-[#FFFFFF] rounded-[3px]'
             value={to}
             onChange={(e) => setFilters({ to: e.target.value })}

             /></span>
           </div>
           <div className="">
             <H3>Другое</H3>
               <label className="flex gap-4 items-center">
                 <input
                    type="checkbox"
                    className="w-[20px] h-[20px] rounded-[3px]"
                    checked={discount}
                    onChange={(e) => setDiscount(e.target.checked)}
                  />
                 Скидки
               </label>       
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center gap-6 max-w-[849px]">
          {data.map((item) => (
            <ProductsCart item={item} key={item.id}/>
          ))}
        </div>
          <div className="mx-auto mt-5">
          <Pagination {...pagData} />
        </div>

          </div>

    </div></div></>
    
  )
}

export default Catalog