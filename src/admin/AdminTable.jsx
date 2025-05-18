import axios from 'axios';
import { Axis3D, Eye, FolderPlus, Paintbrush, Pencil, Trash } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search'
import Pagination from '../components/Pagination';
import useProductsFilter from '../hooks/useProductsFilter';
function AdminTable() {
  const [data, setData] = useState([]);
  const { page } = useProductsFilter();
  const [pagData, setPagData] = useState([]);

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
  
  
  function disc(item) {
  if (item.discount) {
    return <span className="line-through text-gray-500">{item.price}$</span>;
  } else {
    return <span>{item.price}$</span>;
  }
}


  return (
    <div className="mx-auto mt-5 m-5">
     <div className="flex max-w-[1102px] justify-between items-center">
       <Search/>
      
     </div>
      <table className="w-[1140px] mt-5 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">№</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Название</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Описание</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Изображение</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Цена</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Скидка</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Действия</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((item, index) => (
            <tr key={item.id} className=" hover:bg-gray-50">
              <td className="px-4 py-4 text-sm text-gray-700">{index + 1}</td>
              <td className="px-4 py-4 text-sm text-gray-700">{item.name}</td>
              <td className="px-4 py-4 text-sm text-gray-700 max-w-[380px] truncate">{item.description}</td> 
              <td className="px-4 py-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              </td>
              <td className="px-4 py-4 text-sm text-gray-700 ">{disc(item)}</td>
              <td className="px-4 py-4 text-sm text-gray-700">{item.discount ? (
      <span className='my-[20px]  text-sm text-gray-700 ml-8  '>{item.price - Math.round((item.price * item.discount) / 100)}$</span>
    ) : (
      <span className='text-sm text-gray-700 w-[50px]'>{'без скидки'}</span>
    )}</td>
              <td className="px-4 py-4 space-x-2 flex items-center">
                <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"><Pencil /></button>
                <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"><Trash /></button>
                <button className='px-[10px] py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 '><Link to={`/product/${item.id}`}><Eye /></Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        <div className=" mx-auto mt-10">
          <Pagination {...pagData}/>
        </div>
    </div>
  );
}

export default AdminTable;
