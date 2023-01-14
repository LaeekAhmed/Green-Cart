import { useSelector } from "react-redux";
import { getCart } from "../../redux/Cart/selectors";

const Items = () => {
  const { cart, cartTotal } = useSelector(getCart);

  const caterors = Object.keys(cart);

  return (
    <div className="items-checkout">
      <span className="values">
        Items: <p>${cartTotal}</p>
      </span>
      {caterors.map((cateror) => {
        return (
          <div className="item">
            <p className="header">{cateror}</p>
            <ul className="sub-heading">
              {cart[cateror].map((orderInfo) => {
                const { header, count } = orderInfo;
                return (
                  <li>
                    <i>{count}x</i> {header}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
