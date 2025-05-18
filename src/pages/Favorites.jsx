import React, { useEffect, useState } from 'react'
import H2 from "../Typography/H2"
import H3 from '../Typography/H3';

function Favorites() {
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("favoriteCart")) || [];
    setAddedItems(storedItems);
  }, []);

  const removeItem = (item) => {
    const updatedItems = addedItems.filter((i) => i.id !== item.id);
    localStorage.setItem("favoriteCart", JSON.stringify(updatedItems));
    setAddedItems(updatedItems); 
  };  
   const total = addedItems.reduce((acc, value) => acc + value.price, 0);
  
  return (
    <div className='pt-10 '>
      <div className="w-[1000px] mx-auto">
      </div>
      {addedItems.length === 0 ? (
        <div className="mx-auto w-[350px] pt-10">
        <H2 className=' mx-auto' >Избранных нет.</H2>
          </div> 
      ) : (
        <ul className="mx-auto space-y-4 max-w-[1000px] ">
          <H2>Избранные продукты</H2>
          {addedItems.map((item) => (
            <li
              key={item.id}
              className="p-3 border  border-gray-500 rounded-lg flex items-center justify-between"
            >
                <img src={item.image} alt={item.title} className="w-28 h-28" />
                  <h4 className="font-semibold text-[18px] w-[150px] truncate ">{item.name}</h4>
                  <p><span className="font-medium ">Price: </span>{item.price}$</p>
                  <p><span className="font-medium ">Amount: </span>1</p>

              <div className="flex gap-2">
                <button
                  onClick={() =>  removeItem(item)}
                  className="bg-red-600 active:bg-black  text-white px-3 py-1 rounded-3xl w-[100px] h-[40px]"
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
      <H3>{`Общая цена: ${total}`}</H3>
        </ul>
      )}
    </div>
  )
}

export default Favorites