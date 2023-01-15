import path from "path";
import React, { useState, useEffect } from "react";
import "@chakra-ui/react";
// 📌 import lib b4 importing types ;
import type { AlertProps, TextProps } from "@chakra-ui/react";

const defaultList = [
  {name: 'Eggs', price: 4.25, weight: 5, quantity: 4, inc_qty: false},
  {name: 'Ground Chicken', price: 8.95, weight: 5, quantity: 4, inc_qty: false}
]

interface propType {
checkList: typeof defaultList,
addItem: Function
}

type UserProps = AlertProps & propType & {
    name: string
    price: number
    farmer: string
    weight: number
    quantity: number
    img: string
    checkList: typeof defaultList
}


const Item : React.FC<UserProps> = ({name, price, farmer, weight, quantity, img, checkList, addItem} : UserProps) => {

  const defItem = {ENERC_KCAL: 100, PROCNT: 10, FAT: 10, CHOCDF: 10, FIBTG: 10 }

  const [info, setInfo] = useState<typeof defItem>(defItem);

  const useCachedApiCall = (apiFunc: (item: string) => Promise<any>) => {

    const [cache, setCache] = useState<Record<string, typeof defItem>>({});
    return async (item: string) => {
      if (cache[item]) {
        return cache[item];
      } else {
        const result = await apiFunc(item);
        setCache({ ...cache, [item]: result });
        return result;
      }
    };
  };

  const apiCall = (item : String) => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e63110a651msh5e8eb31fb666ef8p1ff7a4jsn34d5d9fbd334',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
      };
      const BASE_URL = `https://edamam-food-and-grocery-database.p.rapidapi.com`;
      return fetch(`${BASE_URL}/parser?ingr=${item}`, options)
        .then(response => response.json())
        .then(response => {
          if(response){
            return response.parsed[0].food.nutrients;
          }
          else{
            console.log("not found for item ; ",item);
          }
        })
        .catch(err => console.error("cp1 ; ",err));
    }
  const cachedApiCall = useCachedApiCall(apiCall)
  
  useEffect(() => {
    cachedApiCall(name).then(result => {
      setInfo(result)
    });
  }, [name]);




    

  return (
    <div>
        <div className="product">
            <img src = {img} alt="Eggs" />
            <div className="heading"> <p> {name} </p > <p> $ {price} </p></div>
            <p> {weight} dozen </p>
            <p>Farmer: {farmer}</p>
            <div><h6>Nutri Info:</h6>
              <p>KCal = {info.ENERC_KCAL}</p>
              <p>protein = {info.PROCNT}</p>
              <p>Fat = {info.FAT}</p>
            </div>
            <button onClick={()=>{
              console.log("clicked!")
              addItem(name, price, weight, quantity);
            }}> Add to Cart </button>
        </div>
    </div>
  )
}

export default Item;