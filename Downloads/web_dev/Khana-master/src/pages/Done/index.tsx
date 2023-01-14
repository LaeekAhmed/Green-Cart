import { useDispatch, useSelector } from "react-redux";
import { PAGE } from "../../redux/AppFlow/types";
import { getAppFlow } from "../../redux/AppFlow/selectors";
import { Check2All, House, HouseExclamation } from "react-bootstrap-icons";
import { APP_FLOW_ACTIONS } from "../../redux/AppFlow";
import { getCart } from "../../redux/Cart/selectors";
import { CART_ACTIONS } from "../../redux/Cart";
import { get } from "lodash";
const DoneScreen = () => {
  const { page } = useSelector(getAppFlow);
  const { cart } = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <div
      className={
        page === PAGE.DONE ? "done-screen" : "done-screen hidden-screen"
      }
    >
      <h1>
        Order Placed!
        <p className="order-placed">
          Your order has been placed and an email will be sent our shortly!
          <br />
          <br />
          <div className="delivery-date">
            <h4>Expected Delivery Date(s):</h4>
            {Object.keys(cart).map((caterer: string) => (
              <p>
                {caterer}:{" "}
                {get(cart, caterer)[0] !== undefined
                  ? get(cart, caterer)[0].deliveryDate?.toDateString()
                  : ""}
              </p>
            ))}
          </div>
        </p>
      </h1>
      <img className="check-mark" src="order-completed.gif" />
      <button
        onClick={() => {
          // dispatch(CART_ACTIONS.removeAll());
          // dispatch(APP_FLOW_ACTIONS.update(PAGE.HOME));
          window.location.href = "";
        }}
      >
        <House size={15} />
        Home
      </button>
    </div>
  );
};

export default DoneScreen;
