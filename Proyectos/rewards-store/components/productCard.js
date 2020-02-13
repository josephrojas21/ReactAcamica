import { Card, CardTitle, CardFront } from "../styles/styledGrid";
import Link from 'next/link'
import React, { useState } from "react";

export const ProductCard = props => {
  const { product,handleClick } = props;


 
  return (
    <Link href={`/productDetail?title=${product._id}`}>
      <Card >
        <CardFront>
          <CardTitle>
            <div>{product.name}</div>
          </CardTitle>

          <img src={product.img.url}></img>
          <div>{product.cost}</div>
          <div>{product.category}</div>
        </CardFront>
      </Card>
    </Link>
    
  );
};
