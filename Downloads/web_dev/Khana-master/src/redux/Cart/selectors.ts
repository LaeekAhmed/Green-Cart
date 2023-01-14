import { AppState } from "../reduxStore";

export const getCart = (state: AppState) => {
    return state.cart;
}
