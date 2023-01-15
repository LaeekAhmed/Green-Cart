import "./Products.scss";
import eggs from "./Eggs.jpg";
import gchicken from "./gchicken.jpg"
import bchicken from "./bchicken.jpg"
import tchicken from "./tchicken.jpg"
import wchicken from "./wchicken.jpg"
import potatoes from "./potatoes.jpg"
import radish from "./radish.jpg"
import rasp from "./raspberries.jpg"
import straw from "./strawberries.jpg"
import leg from "./legumes.jpg"
import blackberry from "./blackberries.jpg"
import corn from "./corn.jpg"
import Item from "./Item";


function Products() {

    const prodList = [
        {name: 'Eggs', price: 4.25, farmer: "bob", weight: 5, quantity: 4, img: eggs},
        {name: 'Ground Chicken', price: 8.95, farmer: "bob", weight: 5, quantity: 4, img: gchicken},
        {name: 'Chicken Breast', price: 3, farmer: "bob", weight: 5, quantity: 4, img: bchicken},
        {name: 'Potatoes', price: 4, farmer: "bob", weight: 5, quantity: 4, img: potatoes},
        {name: 'Corn', price: 4, farmer: "bob", weight: 5, quantity: 4, img: corn},
        {name: 'blackberry', price: 4, farmer: "bob", weight: 5, quantity: 4, img: blackberry}
        ]

  return (
    <div>
        <div className="title" >
        <h1> Local Produce</h1>
        </div>
        <div className="products">
            {prodList.map((prod) => 
                <Item
                    // props ;
                    name={prod.name} price={prod.price}
                    farmer={prod.farmer} weight={prod.weight} quantity={prod.quantity} img={prod.img} >
                </Item>)}
        </div>

    </div>
  );
}

export default Products;
