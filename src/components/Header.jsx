import { Heart, ShoppingCart, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Img1 from "../assets/img/Group 152.png"
import { Link } from 'react-router-dom'
import SearcchInput from "./Search"
import { useLocation } from "react-router-dom";
import H4 from "../Typography/H4"


function Header() {
  const location = useLocation();
    const [addedItems, setAddedItems] = useState([]);
    const [addedItemss, setAddedItemss] = useState([]);

    
  
    useEffect(() => {
    const interval = setInterval(() => {
      const prevItems = JSON.parse(localStorage.getItem("favoriteCart")) || [];
      const prevItemss = JSON.parse(localStorage.getItem("basketItemss")) || [];
      setAddedItems(prevItems);
      setAddedItemss(prevItemss);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  
  return (
    <>
        <header className='bg-[#F7F7F7] '>
            <div className="w-[1140px] mx-auto  flex justify-between ">
                               
                
            </div>
            <div className="max-w-[1140px] bg-[#F7F7F7] h-[38px] mt-5 mx-auto flex justify-between items-center">
              <Link to={"/"}>
              <span className='relative flex'>
              <img src={Img1} alt="" className='relative'/>
              <span className='font-extrabold text-white text-3xl absolute top-0.5 left-11 max-h-[30px]'>
              TDA
              </span>
              </span></Link>
              
              <Link to={"tel:+777199994"}><span className=' text-lg'>Номер:</span><span> +7 771 999 94</span></Link>
              <div className="max-w-[100px] flex gap-11">
                  <Link to={"/favorites"}><span className='relative'><Heart className={`${location.pathname === "/favorites" ? "stroke-red-600" : "stroke-black"}`} /><span className=' py-[px] px-[6.5px] text-white bg-red-600  rounded-full absolute top-3.5 -right-2'>{addedItems.length}</span></span></Link>
                  <Link to={"/basket"}><span className='relative'><ShoppingCart className={`${location.pathname === "/basket" ? "stroke-red-600" : "stroke-black"}`} /><span className=' py-[px] px-[6.5px] text-white bg-red-600  rounded-full absolute top-3.5 -right-2'>{addedItemss.length}</span></span></Link>
                </div>
              
            <Link to={"admin"}><div className="active:bg-[#275083] cursor-pointer p-3 bg-[#1074EB] rounded-[6.5px] w-[48px] h-[48px]">
              <User className=' stroke-white'/>
              </div></Link>
            </div>
              <div className="max-w-[1140px] mx-auto  mt-5">
              <SearcchInput/>
              </div>
            <div className=" bg-[#F7F7F7]">
            <div className="max-w-[1140px] p-4  h-[60px]  mx-auto flex justify-between items-center ">
              <Link to={"/catalog"}><H4 className='active:text-red-500'>Все товари</H4></Link>              
              <Link to={"catalog/vegetables"}><H4 className='active:text-red-500'>Овощи</H4></Link>              
              <Link to={"catalog/fruits"}><H4 className='active:text-red-500'>Фрукты</H4></Link>              
              <Link to={"catalog/meat"}><H4 className='active:text-red-500'>Мясные</H4></Link>              
              <Link to={"catalog/dairy"}><H4 className='active:text-red-500'>Молочные</H4></Link>              
            </div>
            </div>
        </header>
    </>
  )
}

export default Header