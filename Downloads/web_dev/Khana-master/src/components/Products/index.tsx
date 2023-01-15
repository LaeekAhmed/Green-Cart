import "./Products.scss";
import eggs from "./Eggs.jpg";
import gchicken from "./gchicken.jpg"
import bchicken from "./bchicken.jpg"
import tchicken from "./tchicken.jpg"
import wchicken from "./wchicken.jpg"
import potatoes from "./potatoes.jpg"
import radish from "./radish.jpg"
import rasp from "./raspberry.jpg"
import straw from "./straw.jpg"
import leg from "./legumes.jpg"
import blackberry from "./blackberry.jpg"
import corn from "./corn.jpg"


function Products() {
  return (
    <div>
        <div className="title" >
        <h1> Local Produce</h1>
        </div>
        <div className="products">
            <div className="product">
                <img src = {eggs} alt="Eggs" />
                <div className="heading"> <p> Eggs </p > <p> $4.25 </p></div>
                
                <p> 1 dozen </p>
                <p>Farmer: Billy</p>
                <button> Add to Cart </button>
            </div>
            <div className="product">
            <img src = {gchicken} alt="Eggs" />
                <h3> Ground Chicken </h3>
                <p> $8.95 </p>
                <p> 1 lb </p>
                <p>Farmer: Bob</p>
                <button> Add to Cart </button>
            </div>
            <div className="product">
            <img src = {bchicken} alt="chicken breast" />
                <h3> Chicken Breast </h3>
                <p> $3.725 </p>
                <p> 1 lb</p>
                <p>Farmer: Bob</p>
                <button> Add to Cart </button>
            </div>
            <div className="product">
            <img src = {tchicken} alt="Eggs" />
                <h3>Chicken Thighs</h3>
                <p> $2.40</p>
                <p> 1 lb</p>
                <p>Farmer: Bob</p>
                <button> Add to Cart </button>
            </div>
            <div className="product">
            <img src = {wchicken} alt="Eggs" />
                <h3> Chicken Wings </h3>
                <p> $2.68 </p>
                <p> 1 lb </p>
                <p>Farmer: Bob</p>
                <button> Add to Cart </button>
            </div>
            <div className="product">
            <img src = {potatoes} alt="Eggs" />
                <h3> Potatoes </h3>
                <p> $2.01 </p>
                <p> 1 lb </p>
                <p>Farmer: Amber</p>
                <button> Add to Cart </button>
            </div>
            <div className="product">
            <img src = {leg} alt="Eggs" />
                <h3> Legumes</h3>
                <p> $0.51 </p>
                <p> 1 lb </p>
                <p>Farmer: Amber</p>
                <button> Add to Cart </button>
            </div> 
            <div className="product">
            <img src = {corn} alt="Eggs" />
                <h3> Corn </h3>
                <p> $0.68</p>
                <p> 1 lb </p>
                <p>Farmer: Joe</p>
                <button> Add to Cart </button>
            </div>
            <div className="product">
            <img src = {radish} alt="Eggs" />
                <h3> Radish </h3>
                <p> $2.67 </p>
                <p> 1 lb </p>
                <p>Farmer: Joe</p>
                <button> Add to Cart </button>
            </div>
            <div className="product">
            <img src = {blackberry} alt="Eggs" />
                <h3> Blackberries </h3>
                <p> $5.66 </p>
                <p> 1 lb </p>
                <p>Farmer: Jake</p>
                <button> Add to Cart </button>
            </div>
            <div className="product">
            <img src = {straw} alt="Eggs" />
                <h3> Strawberries </h3>
                <p> $2.22</p>
                <p> 1 lb </p>
                <p>Farmer: Jake</p>
                <button> Add to Cart </button>
            </div>
            <div className="product">
            <img src = {rasp} alt="Eggs" />
                <h3> Raspberries </h3>
                <p> $6.88 </p>
                <p> 1 lb </p>
                <p>Farmer: Jake</p>
                <button> Add to Cart </button>
            </div>
        </div>

    </div>
  );
}

export default Products;
