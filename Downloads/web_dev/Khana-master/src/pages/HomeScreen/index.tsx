import Caterors from "../../components/Caterors";
import Footer from "../../components/Footer";
import LogoSection from "../../components/LogoSection/intex";

import UVPSection from "../../components/UVPSection";
import Faq from "../../components/Faq";
import Sidebar from "./SideBar";
import CheckoutForm from "../../components/PaymentDetails";
import Products from "../../components/Products/index";

import { useSelector } from "react-redux";
import { getAppFlow } from "../../redux/AppFlow/selectors";
import { PAGE } from "../../redux/AppFlow/types";
import { Whatsapp } from "react-bootstrap-icons";


const defaultList = [
  {name: 'Eggs', price: 4.25, weight: 5, quantity: 4, inc_qty: false},
  {name: 'Ground Chicken', price: 8.95, weight: 5, quantity: 4, inc_qty: false}
]

interface propType {
  checkList: typeof defaultList,
  netPrice: number
  addItem: Function
}

const HomeScreen = (props : propType) => {
  const { page } = useSelector(getAppFlow);
  return (
    <div
      className={
        page === PAGE.HOME ? "home-screen" : "home-screen hidden-screen"
      }
    >
      <div style={{ display: "flex" }}>
        <div className="main-section">
          <div className="section">
            <div className="left-half">
              <div className="right">
                <LogoSection />
              </div>

              <div className="chartP">
                <UVPSection />
              </div>
            </div>


          <div className="products">
            <Products checkList={props.checkList} addItem={props.addItem}/>
          </div>
            <div className="left">
              <Caterors checkList={props.checkList} addItem={props.addItem} netPrice={props.netPrice}/>
            </div>
            {/* <div className="right">
              <Caterors />
            </div> */}
          </div>
          <Faq />
          <a href="https://wa.me/message/RH6IWVGO4FX6L1">
            <div className="whatsapp">
              <Whatsapp />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
