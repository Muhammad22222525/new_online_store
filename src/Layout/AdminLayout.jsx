import { FolderPlus, Menu, Table } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import Img1 from "../assets/img/Group 152.png"


function AdminLayout() {
  return (
    <div className='flex h-screen'>
        <div className="w-[300px] h-[1500px] bg-teal-950 pt-20 flex flex-col items-center ">
            <Link to={"/"} className='cursor-pointer'>
              <span className='relative flex mb-10'>
              <img src={Img1} alt="" className='relative'/>
              <span className='font-extrabold text-white text-3xl absolute top-0.5 left-11 max-h-[30px]'>
              TDA
              </span>
              </span></Link>
                <div className="flex flex-col gap-7">
                              <Link to="/admin"><span  className="flex ml-7 gap-3 items-center  cursor-pointer text-white text-2xl active:text-red-500 " ><Menu className='stroke-white'/> Главная</span></Link>
                              <Link to="/table"><span  className="flex ml-7 gap-3 items-center cursor-pointer text-white text-2xl active:text-red-500 " ><Table className='stroke-white'/> Таблица прдуктов</span></Link>
                              <Link to={"/post"}><button className=' flex ml-7 items-center gap-2 w-[300px] cursor-pointer text-white text-2xl active:text-red-500 '><FolderPlus className=' stroke-white '/>Добавить продукт</button></Link>
                </div>
              </div>
        <Outlet />
    </div>
  )
}

export default AdminLayout