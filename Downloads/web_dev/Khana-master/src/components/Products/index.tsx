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

const defaultList = [
    {name: 'Eggs', price: 4.25, weight: 5, quantity: 4, inc_qty: false},
    {name: 'Ground Chicken', price: 8.95, weight: 5, quantity: 4, inc_qty: false}
]
  
interface propType {
checkList: typeof defaultList,
addItem: Function
}

function Products(props : propType) {

    const grocList = [
        {name: 'Eggs', price: 4.25, farmer: "bob", weight: 5, quantity: 4, img: eggs},
        {name: 'Ground Chicken', price: 8.95, farmer: "bob", weight: 5, quantity: 4, img: gchicken},
        {name: 'Chicken Breast', price: 3, farmer: "bob", weight: 5, quantity: 4, img: bchicken},
        {name: 'Potatoes', price: 4, farmer: "bob", weight: 5, quantity: 4, img: potatoes},
        {name: 'Corn', price: 4, farmer: "bob", weight: 5, quantity: 4, img: corn},
        {name: 'blackberry', price: 4, farmer: "bob", weight: 5, quantity: 4, img: blackberry},
        {name: 'raspberries', price: 4, farmer: "bob", weight: 5, quantity: 4, img: rasp},
        {name: 'strawberries', price: 4, farmer: "bob", weight: 5, quantity: 4, img: straw},    

        ]

  return (
    <div>
        <div className="title" >
        <h1> Local Produce</h1>
        </div>
        <div className="products">
            
            {grocList.map((prod,idx) => 
                <Item
                    // props ;
                    key={idx} name={prod.name} price={prod.price}
                    farmer={prod.farmer} weight={prod.weight} quantity={prod.quantity} img={prod.img}
                    checkList={props.checkList} addItem={props.addItem} >
                </Item>)
            }
        </div>

    </div>
  );
}

export default Products;
