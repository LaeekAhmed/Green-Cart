import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";
import { Cart } from "./Cart/types";
import { cart } from "./Cart";
import { AppFlow, PAGE } from "./AppFlow/types";
import { appFlow } from "./AppFlow";
import { getAppFlow } from "./AppFlow/selectors";

type Props = {
  children: JSX.Element[];
};

export type AppState = {
  cart: Cart;
  appFlow: AppFlow;
};

const ChildrenWrapper = ({ children }: Props) => {
  const { page } = useSelector(getAppFlow);
  let num = 0;
  if (page === PAGE.CHECKOUT) {
    num = 1;
  } else if (page === PAGE.DONE) {
    num = 2;
  } else {
    num = 0;
  }
  return <div className="wrapper">{children}</div>;
};
const ReduxWrapper = ({ children }: Props) => {
  const store = configureStore({
    reducer: {
      cart: cart.reducer,
      appFlow: appFlow.reducer,
    },
  });

  return (
    <Provider store={store}>
      <ChildrenWrapper children={children} />
    </Provider>
  );
};

export default ReduxWrapper;
