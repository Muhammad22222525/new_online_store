import React from "react";
import img from "../assets/img-1/img-1/Group 155.png";
import img1 from "../assets/img-1/img-1/26.png";
import img2 from "../assets/img-1/img-1/27.png";
import img4 from "../assets/img-1/img-1/28.png";
import img5 from "../assets/img-1/img-1/29.png";
import img6 from "../assets/img-1/img-1/30.png";
import img7 from "../assets/img-1/img-1/31.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#383838] text-white py-10 mt-10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="flex flex-wrap gap-[68px] justify-between">
        
          <div>
          <Link to="/">  <img src={img} alt="Логотип" className="mb-4" /></Link>
            <ul>
              <li className="pt-3">
                <Link to="tel:+992105555511" className="hover:text-blue-400 cursor-pointer">10-55555-11</Link>
              </li>
              <li className="pt-3">
                <Link to="https://www.instagram.com" target="blank" className="hover:text-blue-400 cursor-pointer">Instagram.com</Link>
              </li>
              <li className="pt-3">
                <a href="#" className="hover:text-blue-400 cursor-pointer">Ежедневно 9:30 - 20:00 (МСК)</a>
              </li>
              <li className="pt-3 max-w-[270px]">
                <a href="#" className="hover:text-blue-400 cursor-pointer">
                  117218, г. Бохтар, ул. Норинов,  1/А
                </a>
              </li>
            </ul>
          </div>

              <p  className="pt-3 flex flex-col gap-[13px]">
                <Link to="#" className="hover:text-blue-400 cursor-pointer">Доставка</Link>
                <Link to="#" className="hover:text-blue-400 cursor-pointer">Производители</Link>
                <Link to="#" className="hover:text-blue-400 cursor-pointer">Подарочные сертификаты</Link>
                <Link to="/favorites" className="hover:text-blue-400 cursor-pointer">Избранное</Link>
                <Link to="/catalog/true " className="hover:text-blue-400 cursor-pointer">Акции</Link>
                <Link to="/catalog" className="hover:text-blue-400 cursor-pointer">Все товары</Link>
              </p>

         
          <ul className="pt-3 ">
            {[
              "Служба поддержки",
              "Возврат товара",
              "Личный кабинет",
              "История заказов",
              "Рассылка",
            ].map((text, idx) => (
              <li key={idx} className="pt-3">
                <a href="#" className="hover:text-blue-400 cursor-pointer">{text}</a>
              </li>
            ))}
          </ul>

  
  
          <div className="pt-3 max-w-[300px]">
            <div className="flex gap-4 items-center mb-6">
              <Link to="https://www.whatsapp.com/" target="blank"><img src={img1} alt="icon1" /></Link>
              <Link to="https://www.viber.com/" target="blank"><img src={img2} alt="icon2" /></Link>
             
              <p>Напишите</p>
            </div>

            

            <p className="mt-6">Принимаем к оплате</p>
            <div className="mt-4 flex gap-4 flex-wrap">
              <img src={img5} alt="оплата 1" className="h-8" />
              <img src={img6} alt="оплата 2" className="h-8" />
              <img src={img7} alt="оплата 3" className="h-8" />
              <img src={img4} alt="оплата 4" className="h-8" />
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-300 text-center">
          Все права защищены. Указанная стоимость товаров и условия их приобретения действительны на текущую дату.
        </p>
      </div>
    </footer>
  );
}

export default Footer;