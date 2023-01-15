import path from "path";
import React, { useState } from "react";
import "@chakra-ui/react";
// import lib b4 importing types ;
import type { AlertProps, TextProps } from "@chakra-ui/react";

type UserProps = AlertProps & {
    name: string
    price: number
    farmer: string
    weight: number
    quantity: number
    img: string
}

const Item : React.FC<UserProps> = ({name, price, farmer, weight, quantity, img} : UserProps) => {
  return (
    <div>
        <div className="product">
                <img src = {img} alt="Eggs" />
                <div className="heading"> <p> {name} </p > <p> $ {price} </p></div>
                <p> {weight} dozen </p>
                <p>Farmer: {farmer}</p>
                <button> Add to Cart </button>
        </div>
    </div>
  )
}

export default Item;