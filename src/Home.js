import React from "react";
import "./Home.css";
import Product from "./Product";
import { useState, useEffect } from "react";
function Home() {
  const[productList, setProductList] = useState([]);
  useEffect(() => {
   fetch("https://fakestoreapi.com/products").then((response)=>response.json()).then((value)=> setProductList(value))
  }, [])
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
        {
          productList.map((product)=>{
            return(
              <Product id={product.id} title={product.title} price={product.price} image={product.image} className="grid-item"/>
            )
          })
        }

    </div>
      </div>
    </div>
  );
}

export default Home;
