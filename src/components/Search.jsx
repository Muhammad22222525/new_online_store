// import axios from 'axios';
// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';

// function searchInput() {

//   const [data, setData] = useState([])
//   const [dalete, setDelete] = useState(true);
//     const [searchParams, setSearchParams] = useSearchParams({
//       search: "",
//     }) ;

//       const search = searchParams.get('search') || '';
  
    


//     useEffect(() => {
//       const handler = setTimeout(() => {
//         if (search) {
//         const fetchProducts = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8000/api?name=${search}`);
//           setData(response.data.data);
          
//         } catch (error) {
//           console.error("Error fetching:", error);
//         }
//       };
  
//       fetchProducts();
//       } 
      
//         }, 3000); 
//           return () => {

//             clearTimeout(handler);
//           }
      
//     }, [search]);

    
    
//     // function removeInput() {
//     //   const span = document.getElementById("span");
//     //   span.className = "hidden"
//     // }
    
    
//   return (
//     <div className=''>
//           {/* <button onClick={removeInput()}>X</button> */}
//         <div className="">
//           <label>
//           <input type="text" placeholder='Что ищем? ..' className='w-[292px] border rounded-xl border-gray-400  py-2 px-2.5 ' 
//         value={search}
//         onInput={(e) => setSearchParams({search: e.target.value})}/>
//         </label>
//         </div>

//         {
//           data ? 
//           <div id='span' className='max-w-[400px] mt-2.5 flex flex-wrap gap-1.5 '>{data.map((item) => (
//           <div className="flex flex-col border-gray-500 border rounded-lg p-2">
//            <div   className='flex flex-col'><Link to={`/product/${item.id}`} >
//             <span className=''>{item.name}</span>
//             <span className=''>{item.description}</span></Link></div>
//           </div>
//           ))}</div>
//           : 
//           <span  className='hidden'>lshahsafs</span>
//         }
//     </div>
//   )
// }

// export default searchInput


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function SearchInput() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const search = searchParams.get("search");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (search.trim()) {
        const fetchProducts = async () => {
          try {
            const response = await axios.get(`http://localhost:8000/api?name=${search}`)
            setData(response.data.data);
          } catch (error) {
            console.error("Ошибка при получении данных:", error);
          }
        };
        fetchProducts();
      } else {
        setData([]);
      }
    }, 500); 

    return () => clearTimeout(handler);
  }, [search]);

  return (
    <div className="w-full max-w-md  mt-2 relative">
      <input
        type="text"
        placeholder="Что ищем?.."
        className="w-screen border rounded border-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onInput={(e) => setSearchParams({ search: e.target.value })}
      />

      {data.length > 0 && (
        <div className="mt-2  flex justify flex-wrap w-[1140px]  absolute z-10  bg-[#ffffff]">
          {data.map((item) => (
            <div key={item.id} className="border w-[285px]  border-gray-300  p-3 bg-white shadow hover:shadow-md transition">
              <Link to={`/product/${item.id}`} className="block">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500 truncate">{item.description}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchInput;