import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import H2 from "../Typography/H2"
import H3 from "../Typography/H3"


function Basket() {
  const [addedItems, setAddedItems] = useState([]);
 
   useEffect(() => {
     const storedItems = JSON.parse(localStorage.getItem("basketItemss")) || [];
     setAddedItems(storedItems);
   }, []);
 
   const removeItem = (item) => {
     const updatedItems = addedItems.filter((i) => i.id !== item.id);
     localStorage.setItem("basketItemss", JSON.stringify(updatedItems));
     setAddedItems(updatedItems); 
   };  
   const total = addedItems.reduce((acc, value) => acc + value.price, 0);
   
   

  return (
    <div className='pt-10'>
      <div className="w-[1000px] mx-auto">
            </div>
        {addedItems.length === 0 ? (
          <div className="mx-auto w-[250px] pt-10">
        <H2 className=' mx-auto' >Cart is empty.</H2>
          </div> 
     ) : (
       <ul className="mx-auto space-y-4 max-w-[1000px] ">
         <H2>Your basket</H2>
          {addedItems.map((item) => (
            <li
              
              key={item.id}
              className="p-3 mb-3 border  border-gray-500 rounded-lg flex items-center justify-between"
            >
            <Link to={`${item.image}`} target='blank'>
                <img src={item.image} alt={item.title} className="w-28 h-28 cursor-pointer terget_blank"/>
            </Link>
            <Link to={`/product/${item.id}`}>
                  <h4 className="font-semibold text-[18px] w-[150px] truncate ">{item.name}</h4>
                </Link>
                  <p><span className="font-medium ">Price: </span>{item.price}$</p>
                  <p><span className="font-medium ">Amount: </span>1</p>

              <div className="flex gap-2">
                <button
                  onClick={() => removeItem(item)}
                  className="bg-red-600 cursor-pointer active:bg-black  text-white px-3 py-1 rounded-3xl w-[100px] h-[40px]"
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
      <H3>{`Totalprice: ${total}`}</H3>
        </ul>
      )}
    </div>
  )
}

export default Basket