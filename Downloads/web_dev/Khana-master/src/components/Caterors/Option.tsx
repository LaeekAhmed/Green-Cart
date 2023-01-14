import { useState } from "react";
import { OptionType } from "../../types/Types";
import { useDispatch } from "react-redux";
import { CART_ACTIONS } from "../../redux/Cart";

const Option = ({
  caterorName,
  header,
  offerings,
  price,
  deliveryDate,
}: OptionType & { caterorName: string }) => {
  const [count, setCount] = useState<number>(0);
  const dispatch = useDispatch();

  return (
    <div className="option">
      <div className="container">
        <div className="right">
          <p className="header">{header}</p>
        </div>
        <div className="right">
          <p className="price">${price.toString()}</p>
          <div className="counter">
            <button
              onClick={() => {
                const newCount: number = count - 1 < 0 ? 0 : count - 1;
                dispatch(
                  CART_ACTIONS.remove({
                    [caterorName]: [
                      {
                        header,
                        offerings,
                        price,
                        count: newCount,
                        deliveryDate,
                      },
                    ],
                  })
                );
                setCount(newCount);
              }}
            >
              -
            </button>
            {count.toString()}
            <button
              onClick={() => {
                dispatch(
                  CART_ACTIONS.add({
                    [caterorName]: [
                      {
                        header,
                        offerings,
                        price,
                        count: count + 1,
                        deliveryDate,
                      },
                    ],
                  })
                );
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <ul>
        {offerings.map((offering) => (
          <li>{offering}</li>
        ))}
      </ul>
    </div>
  );
};

export default Option;
