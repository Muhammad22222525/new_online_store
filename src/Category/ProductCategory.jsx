import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import H2 from "../Typography/H2";
import axios from "axios";
import ProductsCart from "../components/ProductsCart";
import Pagination from "../components/Pagination";

function ProductCategory() {
    const { slug } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get(`http://localhost:8000/api?category=${slug}`);
            setData(response.data.data);
            
          } catch (error) {
            console.error("Error fetching:", error);
          }
        };
    
        fetchProducts();
      }, [slug]);

      let Slug = (p) => {
        if (p === "vegetables") {
           return "Овощи"
        } else if (p === "fruits") {
           return "Фрукты"
        } else if (p === "meat") {
           return "Мясные"
        } else {
           return "Молочные"
        }
      }
  return <div>
    <div className="max-w-[1100px] mx-auto">
        <H2>{Slug(slug)}</H2>
        <div className="mt-4 flex flex-wrap gap-4" > 
            {data.map((item) => (
            <ProductsCart item={item} key={item.id}/>
            ))}
        </div>
          <Pagination {...data} />  

    </div>
     </div>;
}

export default ProductCategory;
