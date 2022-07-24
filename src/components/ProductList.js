import React, { useState } from "react";
import Cards from "./Card";
import "./productlist.css";
import { productlistsArr } from "../data/data"

const ProductList = ({ cart, setCart }) => {
  

  const setPriceByOne = (item)=>{
    let tmp = cart;
    /* if(tmp && tmp.length){
      tmp = tmp.map(t=>{
        if(t.id===item.id){
          t.qty = item.qty;
        }
        return t;
      });
    }else{
      item.qty = 1;
      tmp = [item];
    } */
    item.qty = 1;
    tmp.push(item);
    setCart([...tmp]);
  }
  return (
    <section>
      {productlistsArr.map((item) => (
        <Cards key={item.id} item={item} handleClick={()=>setPriceByOne(item)} />
      ))}
    </section>
  );
};

export default ProductList;