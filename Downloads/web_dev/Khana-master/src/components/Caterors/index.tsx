import { useEffect, useState } from "react";
import faiza from "../../images/place-holder.jpg";
import Pill from "./Pill";
import { Options } from "./caterorsDB";
import { Check2 } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/Cart/selectors";
import { APP_FLOW_ACTIONS } from "../../redux/AppFlow";
import { PAGE } from "../../redux/AppFlow/types";
import Grid from "../Grid";

/* LOGIC
  Monday - Friday : Place an order for default (Faiza: This sunday, Shafaq: Next Week Wednesday) delivery 
  Saturday, Sunday: Place an order for default + a weeks delay (Faiza: next Week sunday, Shafaq: Next Next Week Wednesday) delivery
  Before Saturday: The default delivery
  On Saturday: The default delivery + week delay 
*/
const Caterors = () => {
  const [sel, setSel] = useState<Number>(0);
  const [isWeekEnd, setIsWeekEnd] = useState<Boolean>(false);
  const { cartTotal } = useSelector(getCart);

  const dispatch = useDispatch();

  const setSelHeper = (arg: Number) => {
    setSel(sel === arg ? 0 : arg);
  };

  useEffect(() => {
    const myDate = new Date();
    setIsWeekEnd(myDate.getDay() === 6 || myDate.getDay() === 0);
  }, []);

  const nextDate = (dayIndex: number): Date => {
    var today = new Date();
    today.setDate(
      today.getDate() + ((dayIndex - 1 - today.getDay() + 7) % 7) + 1
    );
    return today;
  };

  const addDays = (dateToAdd: Date, days: number): Date => {
    const date = new Date(dateToAdd);
    date.setDate(date.getDate() + days);
    return date;
  };

  return (
    <div className="caterors">
      <div className="grid" id="place-order">
        <h1>Place an Order: </h1>
      </div>
      <Pill
        isSel={sel === 1}
        header="Faiza's Kitchen"
        deliveryDate={addDays(nextDate(7), isWeekEnd ? 7 : 0)}
        price="500"
        imgSrc={faiza}
        onClickCaret={() => setSelHeper(1)}
        options={Options.Faiza}
      />
      <Pill
        isSel={sel === 2}
        header="Shafaq Babar"
        deliveryDate={addDays(nextDate(7), isWeekEnd ? 10 : 3)}
        price="500"
        imgSrc={faiza}
        onClickCaret={() => setSelHeper(2)}
        options={Options.Auntie}
      />
      <Pill
        isSel={sel === 3}
        header="Meal Inn"
        deliveryDate={nextDate(7)}
        price="500"
        imgSrc={faiza}
        onClickCaret={() => setSelHeper(3)}
        options={Options.Auntie2}
      />
      <div className="total">
        <p className="total-price">Total</p>
        <p className="total-price"> ${cartTotal}</p>
      </div>
      <button onClick={() => dispatch(APP_FLOW_ACTIONS.update(PAGE.CHECKOUT))}>
        Checkout <Check2 size={15} />
      </button>
    </div>
  );
};

export default Caterors;
