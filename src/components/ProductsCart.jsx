import React, { useEffect, useState } from 'react'
import {  ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Img1 from "../assets/img/6.png"
import Img2 from "../assets/img/5.png"

function ProductsCart({ item }) {
  const [like, setLike] = useState(false);
  const [addedItems, setAddedItems] = useState([]);
  const [isInBasket, setIsInBasket] = useState(false);

  useEffect(() => {
    const prevItems = JSON.parse(localStorage.getItem("favoriteCart")) || [];
    setLike(prevItems.some(i => i.id === item.id));


    const basketItems = JSON.parse(localStorage.getItem("basketItemss")) || [];
    setAddedItems(basketItems);
    setIsInBasket(basketItems.some(i => i.id === item.id));
  }, [item]);

  const addToFavoriteCart = () => {
    const prevItems = JSON.parse(localStorage.getItem("favoriteCart")) || [];
    let updatedItems;

    if (like) {
      updatedItems = prevItems.filter(i => i.id !== item.id);
    } else {
      updatedItems = [...prevItems, item];
    }

    localStorage.setItem("favoriteCart", JSON.stringify(updatedItems));
    setLike(!like);
  };

  const addToCart = (item) => {
  let updatedItems;
  if (isInBasket) {
    updatedItems = addedItems.filter(i => i.id !== item.id);
  } else {
    updatedItems = [...addedItems, item];
  }
  setAddedItems(updatedItems);
  localStorage.setItem("basketItemss", JSON.stringify(updatedItems));
  setIsInBasket(!isInBasket);
};


  return (
    <div className="w-[263px] hover:shadow-2xl rounded-[4px] border border-[#F7F7F7]">
      <div className="p-8 rounded-[4px] bg-[#F7F7F7] relative">
        <span onClick={addToFavoriteCart}>
          {like ? (
            <img src={Img2} alt="liked" className="cursor-pointer absolute right-3.5 top-3 w-7" />
          ) : (
            <img src={Img1} alt="not liked" className="cursor-pointer absolute right-3.5 top-3 w-7" />
          )}
        </span>
        {item.discount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded">
            sell
          </span>
        )}
            <Link to={`${item.image}`} target='blank'>
        <img src={item.image} alt={item.name} className="w-[203px] h-[203px]" />
        </Link>
      </div>
      <Link to={`/product/${item.id}`}>
        <h3 className="text-[#9C9C9C] ml-8 text-lg font-medium mt-5 underline underline-offset-4">{item.name}</h3>
      </Link>

      <p className="text-[#383838] ml-8 mt-2.5 truncate">{item.description}</p>
      <div className="my-3">
        <span className="my-[20px] text-[#383838] text-2xl font-medium ml-8">{item.price}$</span>
        {item.discount ? (
          <span className="my-[20px] text-2xl font-medium ml-8 text-gray-400 line-through">
            {item.price - Math.round((item.price * item.discount) / 100)}$
          </span>
        ) : (
          <span className="hidden">{item.price}</span>
        )}
      </div>
      
      
          <button
            onClick={() => addToCart(item)}
           className={`... ${isInBasket ? 'bg-red-600 flex gap-2.5 pt-[7px] pb-[7px] mt-3 cursor-pointer w-full text-[16px] font-semibold rounded-[3px] items-center justify-center text-white' : 'bg-[#1064eb] flex gap-2.5 pt-[7px] pb-[7px] mt-3 cursor-pointer w-full text-[16px] font-semibold rounded-[3px] items-center justify-center text-white'}`}
          >
  <ShoppingCart className="stroke-white" /> {isInBasket ? "Удалить из корзины" : "В корзину"}
</button>

    </div>
  );
}

export default ProductsCart
