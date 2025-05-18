// import React from "react";
// import img from "../assets/img-1/img-1/Group 155.png";
// import img1 from "../assets/img-1/img-1/26.png";
// import img2 from "../assets/img-1/img-1/27.png";
// import img3 from "../assets/img-1/img-1/admin.png";
// import img4 from "../assets/img-1/img-1/28.png";
// import img5 from "../assets/img-1/img-1/29.png";
// import img6 from "../assets/img-1/img-1/30.png";
// import img7 from "../assets/img-1/img-1/31.png";

// function Footer() {
//   return (
//     <footer className="bg-[#383838] text-white py-10 mt-10">
//       <div className="max-w-[1440px] mx-auto px-5 md:px-20">
//         <div className="flex flex-wrap gap-[68px] justify-between">
        
//           <div>
//             <img src={img} alt="Логотип" className="mb-4" />
//             <ul>
//               <li className="pt-3">
//                 <a href="#" className="hover:text-blue-400 cursor-pointer">+7 (499) 719-99-94</a>
//               </li>
//               <li className="pt-3">
//                 <a href="#" className="hover:text-blue-400 cursor-pointer">Instagram.com</a>
//               </li>
//               <li className="pt-3">
//                 <a href="#" className="hover:text-blue-400 cursor-pointer">Ежедневно 9:30 - 20:00 (МСК)</a>
//               </li>
//               <li className="pt-3 max-w-[270px]">
//                 <a href="#" className="hover:text-blue-400 cursor-pointer">
//                   117218, г. Москва, пр-кт Нахимовский, дом 30/43, кв. 81
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <ul className="pt-3 ">
//             {[
//               "Информация",
//               "Доставка",
//               "Производители",
//               "Подарочные сертификаты",
//               "Партнерская программа",
//               "Акции",
//               "Все товары",
//             ].map((text, idx) => (
//               <li key={idx} className="pt-3">
//                 <a href="#" className="hover:text-blue-400 cursor-pointer">{text}</a>
//               </li>
//             ))}
//           </ul>

         
//           <ul className="pt-3 ">
//             {[
//               "Служба поддержки",
//               "Возврат товара",
//               "Личный кабинет",
//               "История заказов",
//               "Избранное",
//               "Рассылка",
//             ].map((text, idx) => (
//               <li key={idx} className="pt-3">
//                 <a href="#" className="hover:text-blue-400 cursor-pointer">{text}</a>
//               </li>
//             ))}
//           </ul>

  
  
//           <div className="pt-3 max-w-[300px]">
//             <div className="flex gap-4 items-center mb-6">
//               <img src={img1} alt="icon1" />
//               <img src={img2} alt="icon2" />
//               <p>Напишите</p>
//             </div>

//             <button className="w-full h-12 px-4 py-2 rounded-lg bg-blue-600 flex items-center gap-2 justify-center">
//               <img src={img3} alt="иконка администратора" className="h-6 w-6" />
//               Служба поддержки
//             </button>

//             <p className="mt-6">Принимаем к оплате</p>
//             <div className="mt-4 flex gap-4 flex-wrap">
//               <img src={img5} alt="оплата 1" className="h-8" />
//               <img src={img6} alt="оплата 2" className="h-8" />
//               <img src={img7} alt="оплата 3" className="h-8" />
//               <img src={img4} alt="оплата 4" className="h-8" />
//             </div>
//           </div>
//         </div>

//         <p className="mt-10 text-sm text-gray-300 text-center">
//           Все права защищены. Указанная стоимость товаров и условия их приобретения действительны на текущую дату.
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;