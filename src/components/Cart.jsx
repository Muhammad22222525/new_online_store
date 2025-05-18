import axios from 'axios';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Cart() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isInBasket, setIsInBasket] = useState(false);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/id/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchProducts();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    const basketItems = JSON.parse(localStorage.getItem("basketItemss")) || [];
    setIsInBasket(basketItems.some(i => i.id === product.id));
    setAddedItems(basketItems);
  }, [product]);

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

  if (!product) return <div>Загрузка...</div>;

  const discountedPrice = product.discount
    ? product.price - Math.round((product.price * product.discount) / 100)
    : null;

  return (
    <div className="max-w-[1140px] mx-auto flex gap-8 mt-10">
      <div className="relative">
        {product.discount && (
          <span className="absolute rotate-30 top-3 left-3 bg-red-600 text-white text-2xl font-semibold px-4 py-1 rounded">
            sell
          </span>
        )}
        <a href={product.image} target="_blank" rel="noopener noreferrer">
          <img src={product.image} alt={product.name} className="w-[555px] h-[480px]" />
        </a>
      </div>

      <div className="bg-[#F7F7F7] p-8 rounded-[5px] h-[480px]">
        <div className="pb-4 border-b border-gray-600">
          <h1 className="text-3xl font-semibold mb-8">{product.name}</h1>
        </div>

        <div className="mb-4 border-b border-gray-600 mt-8">
          <p className="text-gray-700 mb-8 text-2xl text-center">{product.description}</p>
        </div>

        <div className="mb-8 border-b border-gray-600 text-4xl font-medium">
          <div className="flex gap-9 items-center mb-4">
            {discountedPrice ? (
              <>
                <p className="font-semibold text-4xl  text-red-500">{discountedPrice}$</p>
                <span className="text-gray-400 line-through">{product.price}$</span>
              </>
            ) : (
              <p className="font-semibold text-4xl mb-8">{product.price}$</p>
            )}

            <div className="w-[120px] h-[45px] bg-[#FFFFFF] py-3 px-4.5 flex gap-7">
              <Minus className="cursor-pointer" />
              <span className="text-lg">0</span>
              <Plus className="cursor-pointer" />
            </div>
          </div>
        </div>

        <button
          onClick={() => addToCart(product)}
          className={`${
            isInBasket ? 'bg-red-600' : 'bg-[#1064eb]'
          } flex gap-2.5 pt-[7px] pb-[7px] mt-3 cursor-pointer w-full text-[16px] font-semibold rounded-[3px] items-center justify-center text-white`}
        >
          <ShoppingCart className="stroke-white" />
          {isInBasket ? 'Удалить из корзины' : 'В корзину'}
        </button>
      </div>
    </div>
  );
}

export default Cart;
